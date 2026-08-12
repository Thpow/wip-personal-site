import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { TURN_FLOW, ERROR_RECOVERY, CONCURRENCY } from "~/data/agents";

/**
 * TurnSequence — Figure: the anatomy of one turn.
 *
 * A sequence diagram over four lifelines (Orchestrator, Brain session,
 * Agent session, team_log.md) rendering the six-step data flow that the
 * real orchestrator executes every turn. Click a step (or use the
 * stepper) to walk the message flow; the corresponding arrow lights up.
 *
 * Includes the failure-handling table: the typed ACP exceptions the
 * orchestrator catches and what it does for each.
 */

// ─── Lifelines (viewBox 900 × 380) ─────────────────────────────────────
const LANES = [
  { id: "orch", label: "Orchestrator", x: 120 },
  { id: "brain", label: "Brain session", x: 380 },
  { id: "agent", label: "Agent session", x: 600 },
  { id: "log", label: "team_log.md", x: 810 },
] as const;

const LANE_X: Record<string, number> = Object.fromEntries(
  LANES.map((l) => [l.id, l.x]),
);

// Each step maps to an arrow (from → to) or a self-loop on one lane.
interface StepArrow {
  step: number; // 1-based, matches TURN_FLOW index
  from: string;
  to: string;
  y: number;
  label: string;
  dashed?: boolean;
}

const ARROWS: StepArrow[] = [
  { step: 1, from: "orch", to: "orch", y: 80, label: "next agent ← cycle(SCHEDULE)" },
  { step: 2, from: "orch", to: "orch", y: 120, label: "single | concurrent dispatch" },
  { step: 3, from: "orch", to: "brain", y: 165, label: "project prompt + log tail" },
  { step: 3, from: "brain", to: "orch", y: 195, label: "one focused instruction", dashed: true },
  { step: 4, from: "orch", to: "agent", y: 235, label: "instruction (verbatim)" },
  { step: 4, from: "agent", to: "agent", y: 262, label: "execute: edits · shell · tests" },
  { step: 5, from: "agent", to: "log", y: 305, label: "append structured output" },
  { step: 6, from: "orch", to: "orch", y: 340, label: "sleep(turn_delay) · check commands.json" },
];

export const TurnSequence = component$(() => {
  const state = useStore<{ activeStep: number; autoPlay: boolean }>({
    activeStep: 1,
    autoPlay: false,
  });

  const step = TURN_FLOW.find((s) => s.index === state.activeStep);

  // Auto-play: advance through steps every 1.8s when enabled
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => state.autoPlay);
    if (!state.autoPlay) return;
    const interval = setInterval(() => {
      state.activeStep = (state.activeStep % TURN_FLOW.length) + 1;
    }, 1800);
    return () => clearInterval(interval);
  });

  return (
    <figure style={{ margin: 0 }}>
      {/* Stepper controls */}
      <div
        style={{
          display: "flex",
          gap: "0.4rem",
          flexWrap: "wrap",
          marginBottom: "0.75rem",
          alignItems: "center",
        }}
      >
        {TURN_FLOW.map((s) => {
          const isActive = state.activeStep === s.index;
          return (
            <button
              key={s.index}
              type="button"
              aria-pressed={isActive ? "true" : "false"}
              onClick$={() => {
                state.activeStep = s.index;
              }}
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "10px",
                padding: "0.3rem 0.55rem",
                border: isActive
                  ? "1px solid #22d3ee"
                  : "1px solid rgba(244, 244, 245, 0.25)",
                color: isActive ? "#0a0a0c" : "rgba(244, 244, 245, 0.7)",
                background: isActive ? "#22d3ee" : "transparent",
                cursor: "pointer",
                letterSpacing: "0.05em",
              }}
            >
              {s.index}
            </button>
          );
        })}
        <span
          style={{
            fontFamily: "ui-monospace, monospace",
            fontSize: "10px",
            color: "#f4f4f5",
            opacity: 0.45,
            marginLeft: "0.5rem",
          }}
        >
          step through one turn
        </span>
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
            marginLeft: "0.5rem",
          }}
        >
          {state.autoPlay ? "❚❚ PAUSE" : "▶ AUTO-PLAY"}
        </button>
      </div>

      <svg
        viewBox="0 0 900 380"
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Sequence diagram of a single turn: the orchestrator schedules an agent, its brain composes an instruction from the project prompt and team log tail, the agent executes it with full tools, and the output is appended to the shared team log."
      >
        <title>Anatomy of one turn</title>
        <style
          dangerouslySetInnerHTML={`
          .seq-active { animation: seqflow 1s linear infinite; }
          @keyframes seqflow { to { stroke-dashoffset: -10; } }
          @media (prefers-reduced-motion: reduce) { .seq-active { animation: none; } }
        `}
        />
        <defs>
          <marker
            id="seq-arrow"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L8,4 L0,8 z" fill="#22d3ee" />
          </marker>
          <marker
            id="seq-arrow-dim"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L8,4 L0,8 z" fill="rgba(224,232,240,0.6)" />
          </marker>
        </defs>

        {/* Lifelines */}
        {LANES.map((lane) => (
          <g key={lane.id}>
            <rect
              x={lane.x - 70}
              y={16}
              width={140}
              height={28}
              fill="#0a0a0c"
              stroke="rgba(224, 232, 240, 0.55)"
              stroke-width={1}
            />
            <text
              x={lane.x}
              y={34}
              text-anchor="middle"
              font-family="ui-monospace, monospace"
              font-size={11}
              fill="#f4f4f5"
            >
              {lane.label}
            </text>
            <line
              x1={lane.x}
              y1={44}
              x2={lane.x}
              y2={366}
              stroke="rgba(244, 244, 245, 0.15)"
              stroke-width={1}
              stroke-dasharray="2 4"
            />
          </g>
        ))}

        {/* Arrows */}
        {ARROWS.map((a, i) => {
          const isActive = a.step === state.activeStep;
          const color = isActive ? "#22d3ee" : "rgba(224, 232, 240, 0.55)";
          const marker = isActive ? "url(#seq-arrow)" : "url(#seq-arrow-dim)";
          const x1 = LANE_X[a.from]!;
          const x2 = LANE_X[a.to]!;

          if (a.from === a.to) {
            // Self-loop
            return (
              <g key={i} opacity={isActive ? 1 : 0.6}>
                <path
                  d={`M ${x1} ${a.y - 10} H ${x1 + 44} V ${a.y + 10} H ${x1 + 4}`}
                  fill="none"
                  stroke={color}
                  stroke-width={isActive ? 1.5 : 1}
                  marker-end={marker}
                  stroke-dasharray={isActive ? "5 5" : undefined}
                  class={isActive ? "seq-active" : undefined}
                />
                <text
                  x={x1 + 52}
                  y={a.y + 3}
                  font-family="ui-monospace, monospace"
                  font-size={11}
                  fill={isActive ? "#22d3ee" : "#f4f4f5"}
                  opacity={isActive ? 1 : 0.62}
                >
                  {a.label}
                </text>
              </g>
            );
          }

          const midX = (x1 + x2) / 2;
          return (
            <g key={i} opacity={isActive ? 1 : 0.6}>
              <line
                x1={x1}
                y1={a.y}
                x2={x2 + (x2 > x1 ? -4 : 4)}
                y2={a.y}
                stroke={color}
                stroke-width={isActive ? 1.5 : 1}
                stroke-dasharray={a.dashed ? "5 4" : isActive ? "5 5" : undefined}
                marker-end={marker}
                class={isActive && !a.dashed ? "seq-active" : undefined}
              />
              <text
                x={midX}
                y={a.y - 6}
                text-anchor="middle"
                font-family="ui-monospace, monospace"
                font-size={11}
                fill={isActive ? "#22d3ee" : "#f4f4f5"}
                opacity={isActive ? 1 : 0.62}
              >
                {a.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Active step detail */}
      <div
        aria-live="polite"
        style={{
          marginTop: "0.5rem",
          padding: "0.75rem 1rem",
          background: "#0a0a0c",
          border: "1px solid rgba(34, 211, 238, 0.35)",
          fontFamily: "ui-monospace, monospace",
          fontSize: "11px",
          lineHeight: 1.7,
          color: "#f4f4f5",
        }}
      >
        {step && (
          <>
            <span style={{ color: "#22d3ee" }}>
              STEP {step.index}/6 — {step.actor}
            </span>
            {"  "}
            <span style={{ opacity: 0.9 }}>{step.action}</span>
            <div style={{ opacity: 0.65, marginTop: "0.25rem" }}>{step.detail}</div>
          </>
        )}
      </div>

      {/* Concurrency + failure handling — research-table style */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            padding: "0.75rem 1rem",
            background: "#0a0a0c",
            border: "1px solid rgba(244, 244, 245, 0.12)",
            fontFamily: "ui-monospace, monospace",
            fontSize: "10px",
            lineHeight: 1.8,
            color: "#f4f4f5",
          }}
        >
          <div style={{ color: "#22d3ee", marginBottom: "0.4rem", letterSpacing: "0.1em" }}>
            CONCURRENT DISPATCH
          </div>
          <div style={{ opacity: 0.7 }}>{CONCURRENCY.mechanism}</div>
          <div style={{ opacity: 0.7 }}>
            companion timeout: {CONCURRENCY.timeoutSeconds}s — hung readers are cancelled
          </div>
          <div style={{ opacity: 0.7 }}>{CONCURRENCY.skipTracking}</div>
          <div style={{ opacity: 0.7 }}>throughput: {CONCURRENCY.throughputGain}</div>
          <div style={{ opacity: 0.7 }}>{CONCURRENCY.directorExcluded}</div>
        </div>

        <div
          style={{
            padding: "0.75rem 1rem",
            background: "#0a0a0c",
            border: "1px solid rgba(244, 244, 245, 0.12)",
            fontFamily: "ui-monospace, monospace",
            fontSize: "10px",
            lineHeight: 1.8,
            color: "#f4f4f5",
          }}
        >
          <div style={{ color: "#22d3ee", marginBottom: "0.4rem", letterSpacing: "0.1em" }}>
            FAILURE HANDLING
          </div>
          {ERROR_RECOVERY.map((rule) => (
            <div key={rule.exception} style={{ opacity: 0.7 }}>
              <span style={{ color: "#f4f4f5", opacity: 0.95 }}>{rule.exception}</span>
              {" → "}
              {rule.action}
            </div>
          ))}
        </div>
      </div>

      <figcaption
        style={{
          marginTop: "0.75rem",
          fontFamily: "ui-monospace, monospace",
          fontSize: "10px",
          color: "#f4f4f5",
          opacity: 0.5,
          lineHeight: 1.6,
        }}
      >
        <span style={{ color: "#22d3ee" }}>Figure 2.</span> Anatomy of one turn.
        The brain decides, the agent executes, the log remembers. Instruction
        composition is separated from execution so instruction quality can be
        tuned independently. A typed exception at any step is caught by the
        orchestrator and recovered without stopping the loop.
      </figcaption>
    </figure>
  );
});
