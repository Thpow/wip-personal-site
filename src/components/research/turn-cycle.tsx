import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import {
  TURN_ORDER,
  CONCURRENT_PAIRS,
  SELF_RESTART,
  CRASH_THRESHOLD,
} from "~/data/agents";

/**
 * TurnCycle — Figure: the 13-turn schedule as an agent swimlane.
 *
 * Each of the six agents owns a lane; each of the 13 turns is a column.
 * The stepped path traces execution order through the cycle, which reads as
 * a descending/ascending staircase because the schedule alternates between
 * the Coder and Reviewer lanes.
 *
 * The diagram also derives the orchestrator's real concurrency bookkeeping:
 * when a writer turn runs, its read-only companions execute in parallel
 * (hollow markers) and their own next scheduled slot is then SKIPPED
 * (crossed markers), tracked by `Orchestrator._ran_concurrent`. That is why
 * only 7 of the 13 scheduled slots actually dispatch a turn.
 */

// ─── Layout (viewBox 900 × 430) ────────────────────────────────────────
const LANE_ORDER = [3, 1, 2, 4, 6, 7];
const LANE_Y0 = 58;
const LANE_GAP = 46;
const COL_X0 = 152;
const COL_GAP = 54;
const AXIS_Y = LANE_Y0 + LANE_ORDER.length * LANE_GAP + 4;

const AGENT_LABELS: Record<number, string> = {
  1: "CODER",
  2: "REVIEWER",
  3: "DIRECTOR",
  4: "QUALITY",
  6: "DOCS",
  7: "IDEAS",
};

const WRITES: Record<number, boolean> = {
  1: true,
  2: false,
  3: false,
  4: false,
  6: true,
  7: true,
};

const laneY = (agent: number) =>
  LANE_Y0 + LANE_ORDER.indexOf(agent) * LANE_GAP + LANE_GAP / 2;
const colX = (i: number) => COL_X0 + i * COL_GAP;

const COMPANIONS: Record<number, number[]> = Object.fromEntries(
  CONCURRENT_PAIRS.map((p) => [p.primary, p.companions]),
);

interface Turn {
  index: number;
  agent: number;
  /** Skipped because this agent already ran as a concurrent companion. */
  skipped: boolean;
  /** Read-only companions dispatched in parallel with this turn. */
  companions: number[];
  x: number;
  y: number;
}

/**
 * Replays the orchestrator's dispatch loop for one cycle to determine which
 * slots execute, which run companions in parallel, and which are skipped.
 */
function buildTurns(): Turn[] {
  const ranConcurrent = new Set<number>();
  return TURN_ORDER.map((agent, index) => {
    const x = colX(index);
    const y = laneY(agent);
    if (ranConcurrent.has(agent)) {
      return { index, agent, skipped: true, companions: [], x, y };
    }
    const companions = COMPANIONS[agent] ?? [];
    for (const c of companions) ranConcurrent.add(c);
    return { index, agent, skipped: false, companions, x, y };
  });
}

const TURNS: Turn[] = buildTurns();
const EXECUTED = TURNS.filter((t) => !t.skipped);

// Stepped orthogonal path through the executed turns — the staircase.
const STEP_PATH = EXECUTED.map((t, i) => {
  if (i === 0) return `M ${t.x} ${t.y}`;
  const prev = EXECUTED[i - 1]!;
  const midX = (prev.x + t.x) / 2;
  return `L ${midX} ${prev.y} L ${midX} ${t.y}`;
})
  .concat(`L ${EXECUTED[EXECUTED.length - 1]!.x} ${EXECUTED[EXECUTED.length - 1]!.y}`)
  .join(" ");

export const TurnCycle = component$(() => {
  const state = useStore<{
    hoveredTurn: number | null;
    activeTurn: number;
    autoPlay: boolean;
  }>({
    hoveredTurn: null,
    activeTurn: -1,
    autoPlay: false,
  });

  // Auto-play: walk the 13 slots in schedule order.
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track, cleanup }) => {
    track(() => state.autoPlay);
    if (!state.autoPlay) {
      state.activeTurn = -1;
      return;
    }
    state.activeTurn = 0;
    const interval = setInterval(() => {
      state.activeTurn = (state.activeTurn + 1) % TURN_ORDER.length;
    }, 850);
    cleanup(() => clearInterval(interval));
  });

  const shown =
    state.hoveredTurn !== null
      ? TURNS[state.hoveredTurn]
      : state.activeTurn >= 0
        ? TURNS[state.activeTurn]
        : undefined;

  return (
    <figure style={{ margin: 0, position: "relative", width: "100%" }}>
      <svg
        viewBox="0 0 900 388"
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="The 13-turn schedule drawn as six agent lanes. A stepped path traces execution order; concurrent companions run in parallel and their next scheduled slot is skipped."
        onMouseOver$={(e) => {
          const el = (e.target as Element).closest("[data-turn]");
          const v = el?.getAttribute("data-turn");
          state.hoveredTurn = v === null || v === undefined ? null : Number(v);
        }}
        onMouseOut$={(e) => {
          if ((e.target as Element).closest("[data-turn]")) {
            state.hoveredTurn = null;
          }
        }}
      >
        <title>Turn schedule — agent lanes</title>
        <style
          dangerouslySetInnerHTML={`
          .tc-hit { cursor: pointer; }
          .tc-path { stroke-dasharray: 1400; animation: tcdraw 3.2s ease-out forwards; }
          @keyframes tcdraw { from { stroke-dashoffset: 1400; } to { stroke-dashoffset: 0; } }
          @media (prefers-reduced-motion: reduce) { .tc-path { animation: none; } }
        `}
        />

        {/* Lane rows */}
        {LANE_ORDER.map((agent, i) => {
          const y = LANE_Y0 + i * LANE_GAP;
          const isActiveLane = shown?.agent === agent;
          return (
            <g key={`lane-${agent}`}>
              <rect
                x={COL_X0 - 26}
                y={y}
                width={13 * COL_GAP}
                height={LANE_GAP}
                fill={isActiveLane ? "rgba(34,211,238,0.05)" : "transparent"}
              />
              <line
                x1={COL_X0 - 26}
                y1={y + LANE_GAP}
                x2={COL_X0 - 26 + 13 * COL_GAP}
                y2={y + LANE_GAP}
                stroke="rgba(244,244,245,0.08)"
                stroke-width={1}
              />
              {/* Lane label */}
              <text
                x={132}
                y={y + LANE_GAP / 2 + 3}
                text-anchor="end"
                font-family="ui-monospace, monospace"
                font-size={11}
                fill={isActiveLane ? "#22d3ee" : "#f4f4f5"}
                opacity={isActiveLane ? 1 : 0.75}
              >
                {agent} {AGENT_LABELS[agent]}
              </text>
              <text
                x={132}
                y={y + LANE_GAP / 2 + 15}
                text-anchor="end"
                font-family="ui-monospace, monospace"
                font-size={8}
                fill={WRITES[agent] ? "#e035a0" : "#f4f4f5"}
                opacity={WRITES[agent] ? 0.8 : 0.35}
              >
                {WRITES[agent] ? "writes" : "read-only"}
              </text>
            </g>
          );
        })}

        {/* Column ticks + turn numbers */}
        {TURNS.map((t) => (
          <g key={`col-${t.index}`}>
            <line
              x1={t.x}
              y1={LANE_Y0}
              x2={t.x}
              y2={AXIS_Y - 4}
              stroke={
                state.activeTurn === t.index
                  ? "rgba(34,211,238,0.35)"
                  : "rgba(244,244,245,0.05)"
              }
              stroke-width={1}
            />
            <text
              x={t.x}
              y={AXIS_Y + 14}
              text-anchor="middle"
              font-family="ui-monospace, monospace"
              font-size={9}
              fill={state.activeTurn === t.index ? "#22d3ee" : "#f4f4f5"}
              opacity={state.activeTurn === t.index ? 1 : 0.4}
            >
              {t.index + 1}
            </text>
          </g>
        ))}
        <text
          x={132}
          y={AXIS_Y + 14}
          text-anchor="end"
          font-family="ui-monospace, monospace"
          font-size={9}
          fill="#f4f4f5"
          opacity={0.35}
        >
          TURN
        </text>

        {/* Parallel-dispatch braces: writer → companions in the same column */}
        {TURNS.filter((t) => t.companions.length > 0).map((t) =>
          t.companions.map((c) => (
            <line
              key={`par-${t.index}-${c}`}
              x1={t.x}
              y1={t.y}
              x2={t.x}
              y2={laneY(c)}
              stroke="#e035a0"
              stroke-opacity={0.5}
              stroke-width={1}
              stroke-dasharray="3 3"
            />
          )),
        )}

        {/* Companion markers (ran in parallel, hollow) */}
        {TURNS.filter((t) => t.companions.length > 0).map((t) =>
          t.companions.map((c) => (
            <circle
              key={`comp-${t.index}-${c}`}
              cx={t.x}
              cy={laneY(c)}
              r={5}
              fill="#0a0a0c"
              stroke="#e035a0"
              stroke-width={1.5}
              stroke-opacity={0.9}
            />
          )),
        )}

        {/* Execution staircase */}
        <path
          d={STEP_PATH}
          fill="none"
          stroke="#22d3ee"
          stroke-opacity={0.55}
          stroke-width={1.5}
          class="tc-path"
        />

        {/* Turn markers */}
        {TURNS.map((t) => {
          const isActive = state.activeTurn === t.index;
          const isHover = state.hoveredTurn === t.index;
          const hot = isActive || isHover;
          if (t.skipped) {
            // Skipped slot — this agent already ran as a companion
            return (
              <g key={`t-${t.index}`} class="tc-hit" data-turn={t.index}>
                <rect
                  x={t.x - 9}
                  y={t.y - 9}
                  width={18}
                  height={18}
                  fill="transparent"
                />
                <path
                  d={`M ${t.x - 4} ${t.y - 4} L ${t.x + 4} ${t.y + 4} M ${t.x + 4} ${t.y - 4} L ${t.x - 4} ${t.y + 4}`}
                  stroke={hot ? "#f4f4f5" : "rgba(244,244,245,0.35)"}
                  stroke-width={1.5}
                />
              </g>
            );
          }
          const size = hot ? 13 : 10;
          return (
            <g key={`t-${t.index}`} class="tc-hit" data-turn={t.index}>
              <rect
                x={t.x - size / 2}
                y={t.y - size / 2}
                width={size}
                height={size}
                fill={hot ? "#22d3ee" : "#0a0a0c"}
                stroke="#22d3ee"
                stroke-width={1.5}
              />
            </g>
          );
        })}

        {/* Legend */}
        <g font-family="ui-monospace, monospace" font-size={9} fill="#f4f4f5">
          <rect x={COL_X0 - 26} y={16} width={11} height={11} fill="#0a0a0c" stroke="#22d3ee" stroke-width={1.5} />
          <text x={COL_X0 - 10} y={25} opacity={0.6}>
            dispatched turn
          </text>
          <circle cx={COL_X0 + 116} cy={21} r={5} fill="#0a0a0c" stroke="#e035a0" stroke-width={1.5} />
          <text x={COL_X0 + 126} y={25} opacity={0.6}>
            ran in parallel (read-only companion)
          </text>
          <path
            d={`M ${COL_X0 + 386} 17 L ${COL_X0 + 394} 25 M ${COL_X0 + 394} 17 L ${COL_X0 + 386} 25`}
            stroke="rgba(244,244,245,0.5)"
            stroke-width={1.5}
          />
          <text x={COL_X0 + 402} y={25} opacity={0.6}>
            slot skipped — already ran this cycle
          </text>
        </g>
      </svg>

      {/* Read-out: active/hovered slot */}
      <div
        aria-live="polite"
        style={{
          marginTop: "0.5rem",
          padding: "0.6rem 0.9rem",
          minHeight: "44px",
          background: "#0a0a0c",
          border: shown
            ? "1px solid rgba(34, 211, 238, 0.4)"
            : "1px solid rgba(244, 244, 245, 0.1)",
          fontFamily: "ui-monospace, monospace",
          fontSize: "11px",
          lineHeight: 1.7,
          color: "#f4f4f5",
        }}
      >
        {shown ? (
          <>
            <span style={{ color: "#22d3ee" }}>
              TURN {shown.index + 1}/13
            </span>
            {"  →  AGENT "}
            {shown.agent} {AGENT_LABELS[shown.agent]}
            {shown.skipped ? (
              <div style={{ opacity: 0.65, marginTop: "0.15rem" }}>
                Skipped — this agent already ran as a read-only companion
                earlier this cycle (Orchestrator._ran_concurrent). The
                orchestrator logs a SYSTEM (SKIP) entry, sleeps turn_delay, and
                continues.
              </div>
            ) : shown.companions.length > 0 ? (
              <div style={{ opacity: 0.65, marginTop: "0.15rem" }}>
                Dispatched with{" "}
                {shown.companions
                  .map((c) => `${c} ${AGENT_LABELS[c]}`)
                  .join(" + ")}{" "}
                in a ThreadPoolExecutor — the writer and its read-only
                companions share this slot.
              </div>
            ) : (
              <div style={{ opacity: 0.65, marginTop: "0.15rem" }}>
                Dispatched alone via _run_single_turn() — full sequential
                context.
              </div>
            )}
          </>
        ) : (
          <span style={{ opacity: 0.4 }}>
            hover a marker for that slot&apos;s dispatch detail — or press play
          </span>
        )}
      </div>

      {/* Annotation strip */}
      <div
        style={{
          marginTop: "0.75rem",
          padding: "0.75rem 1rem",
          background: "#0a0a0c",
          border: "1px solid rgba(244, 244, 245, 0.12)",
          fontFamily: "ui-monospace, monospace",
          fontSize: "10px",
          color: "#f4f4f5",
          lineHeight: 1.8,
          display: "flex",
          gap: "1.75rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div>
          <span style={{ color: "#22d3ee" }}>DISPATCHED</span>{" "}
          {EXECUTED.length}/{TURN_ORDER.length} slots
        </div>
        <div>
          <span style={{ color: "#22d3ee" }}>CYCLE</span> (turn − 1) //{" "}
          {TURN_ORDER.length} + 1
        </div>
        <div>
          <span style={{ color: "#22d3ee" }}>SELF-RESTART</span> every{" "}
          {SELF_RESTART.interval} cycles → os.execv
        </div>
        <div>
          <span style={{ color: "#22d3ee" }}>CRASH</span>{" "}
          {CRASH_THRESHOLD.consecutive} consecutive → {CRASH_THRESHOLD.action}
        </div>
        <button
          type="button"
          aria-pressed={state.autoPlay ? "true" : "false"}
          onClick$={() => {
            state.autoPlay = !state.autoPlay;
          }}
          style={{
            fontFamily: "ui-monospace, monospace",
            fontSize: "10px",
            padding: "0.3rem 0.7rem",
            border: state.autoPlay
              ? "1px solid #22d3ee"
              : "1px solid rgba(244, 244, 245, 0.25)",
            color: state.autoPlay ? "#0a0a0c" : "rgba(244, 244, 245, 0.7)",
            background: state.autoPlay ? "#22d3ee" : "transparent",
            cursor: "pointer",
            letterSpacing: "0.05em",
          }}
        >
          {state.autoPlay ? "❚❚ PAUSE" : "▶ PLAY CYCLE"}
        </button>
      </div>
    </figure>
  );
});
