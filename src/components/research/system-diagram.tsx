import { component$, useStore } from "@builder.io/qwik";
import { SYSTEM_MODULES, type SystemModule } from "~/data/agents";

/**
 * SystemDiagram — Figure: system architecture of devin-autopilot.
 *
 * An interactive blueprint of the real module structure: run.py's re-exec
 * loop wrapping the Orchestrator, six Agent subprocesses each hosting a
 * brain + agent ACP session pair, the shared state files, and the two
 * control surfaces (web dashboard, command injection).
 *
 * Hover or focus any block to read its purpose (sourced from the repo's
 * ARCHITECTURE.md). Click to pin the detail panel.
 */

// ─── Layout constants (viewBox 900 × 560) ──────────────────────────────
const AGENT_NUMBERS = [1, 2, 3, 4, 6, 7];
// Sized so the six agent boxes end well clear of the state column at x=690.
const AGENT_BOX_W = 88;
const AGENT_BOX_H = 96;
const AGENT_GAP = 12;
const AGENTS_X0 = 60;
const AGENTS_Y = 250;

const MODULES_BY_ID: Record<string, SystemModule> = Object.fromEntries(
  SYSTEM_MODULES.map((m) => [m.id, m]),
);

const AGENT_NAMES: Record<number, string> = {
  1: "CODER",
  2: "REVIEWER",
  3: "DIRECTOR",
  4: "QUALITY",
  6: "DOCS",
  7: "IDEAS",
};

export const SystemDiagram = component$(() => {
  const state = useStore<{ hovered: string | null; pinned: string | null }>({
    hovered: null,
    pinned: null,
  });

  const activeId = state.hovered ?? state.pinned;
  const active = activeId ? MODULES_BY_ID[activeId] : undefined;

  const stroke = (id: string) =>
    activeId === id ? "#22d3ee" : "rgba(244, 244, 245, 0.35)";
  const strokeW = (id: string) => (activeId === id ? 1.5 : 1);

  return (
    <figure style={{ margin: 0 }}>
      <div style={{ position: "relative", width: "100%" }}>
        <svg
          viewBox="0 0 900 560"
          style={{ width: "100%", height: "auto", display: "block" }}
          role="img"
          aria-label="System architecture: run.py re-exec loop wraps the orchestrator, which dispatches turns to six agent subprocesses, each hosting a brain and an agent ACP session; all output flows into a shared team log."
          // Event delegation on the SVG root: nesting a Qwik component inside
          // <svg> drops the SVG namespace (children render as HTML and become
          // invisible), so hit-testing is done here via data-module lookup.
          onMouseOver$={(e) => {
            const el = (e.target as Element).closest("[data-module]");
            state.hovered = el?.getAttribute("data-module") ?? null;
          }}
          onMouseOut$={(e) => {
            const el = (e.target as Element).closest("[data-module]");
            if (el) state.hovered = null;
          }}
          onClick$={(e) => {
            const id = (e.target as Element)
              .closest("[data-module]")
              ?.getAttribute("data-module");
            if (id) state.pinned = state.pinned === id ? null : id;
          }}
        >
          <title>devin-autopilot system architecture</title>
          <style
            dangerouslySetInnerHTML={`
            .sys-hit { cursor: pointer; }
            .sys-hit:hover rect { stroke: #22d3ee; }
            .sys-flow { stroke-dasharray: 4 4; animation: sysflow 1.2s linear infinite; }
            @keyframes sysflow { to { stroke-dashoffset: -8; } }
            @media (prefers-reduced-motion: reduce) { .sys-flow { animation: none; } }
          `}
          />

          <defs>
            <marker
              id="sys-arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L8,4 L0,8 z" fill="#22d3ee" opacity={0.7} />
            </marker>
          </defs>

          {/* ── run.py — outer re-exec loop ─────────────────────────── */}
          <g data-module="run" class="sys-hit">
            <rect
              x={60}
              y={24}
              width={500}
              height={44}
              fill="#0a0a0c"
              stroke={stroke("run")}
              stroke-width={strokeW("run")}
            />
            <text x={76} y={44} font-family="ui-monospace, monospace" font-size={12} fill="#f4f4f5">
              run.py
            </text>
            <text x={76} y={58} font-family="ui-monospace, monospace" font-size={9} fill="#f4f4f5" opacity={0.5}>
              outer while-True loop — ExitReason → os.execv re-exec | clean exit
            </text>
          </g>
          {/* re-exec loop arrow */}
          <path
            d="M 560 46 H 610 V 130 H 560"
            fill="none"
            stroke="#22d3ee"
            stroke-opacity={0.5}
            stroke-width={1}
            marker-end="url(#sys-arrow)"
            class="sys-flow"
          />
          <text x={620} y={92} font-family="ui-monospace, monospace" font-size={9} fill="#22d3ee" opacity={0.8}>
            SELF_RESTART
          </text>
          <text x={620} y={104} font-family="ui-monospace, monospace" font-size={9} fill="#f4f4f5" opacity={0.5}>
            every 10 cycles
          </text>

          {/* ── Orchestrator ─────────────────────────────────────────── */}
          <g data-module="orchestrator" class="sys-hit">
            <rect
              x={60}
              y={100}
              width={500}
              height={60}
              fill="#0a0a0c"
              stroke={stroke("orchestrator")}
              stroke-width={strokeW("orchestrator")}
            />
            <text x={76} y={122} font-family="ui-monospace, monospace" font-size={12} fill="#f4f4f5">
              Orchestrator
            </text>
            <text x={76} y={137} font-family="ui-monospace, monospace" font-size={9} fill="#f4f4f5" opacity={0.5}>
              itertools.cycle(SCHEDULE = [3,1,2,1,2,3,1,2,1,2,4,6,7]) — dispatch, recovery,
            </text>
            <text x={76} y={149} font-family="ui-monospace, monospace" font-size={9} fill="#f4f4f5" opacity={0.5}>
              concurrent pairs (ThreadPoolExecutor), spawn_pair(), crash detector
            </text>
          </g>

          {/* config feeding orchestrator */}
          <g data-module="config" class="sys-hit">
            <rect
              x={690}
              y={24}
              width={170}
              height={44}
              fill="#0a0a0c"
              stroke={stroke("config")}
              stroke-width={strokeW("config")}
            />
            <text x={702} y={44} font-family="ui-monospace, monospace" font-size={11} fill="#f4f4f5">
              config.py
            </text>
            <text x={702} y={58} font-family="ui-monospace, monospace" font-size={8} fill="#f4f4f5" opacity={0.5}>
              SCHEDULE · PAIRS · roles · models
            </text>
          </g>
          <path
            d="M 775 68 V 130 H 560"
            fill="none"
            stroke="rgba(244,244,245,0.3)"
            stroke-width={1}
            marker-end="url(#sys-arrow)"
          />

          {/* dispatch arrows to agents */}
          {AGENT_NUMBERS.map((n, i) => {
            const x = AGENTS_X0 + i * (AGENT_BOX_W + AGENT_GAP) + AGENT_BOX_W / 2;
            return (
              <line
                key={`dispatch-${n}`}
                x1={x}
                y1={160}
                x2={x}
                y2={AGENTS_Y - 4}
                stroke="#22d3ee"
                stroke-opacity={0.35}
                stroke-width={1}
                marker-end="url(#sys-arrow)"
              />
            );
          })}
          <text x={60} y={192} font-family="ui-monospace, monospace" font-size={9} fill="#f4f4f5" opacity={0.45}>
            take_turn(shared_log) — one agent per turn; writers run with read-only companions in parallel
          </text>

          {/* ── 6 agent subprocess boxes (brain + agent sessions) ────── */}
          {AGENT_NUMBERS.map((n, i) => {
            const x = AGENTS_X0 + i * (AGENT_BOX_W + AGENT_GAP);
            return (
              <g key={`agent-${n}`} data-module="agents" class="sys-hit">
                <rect
                  x={x}
                  y={AGENTS_Y}
                  width={AGENT_BOX_W}
                  height={AGENT_BOX_H}
                  fill="#0a0a0c"
                  stroke={stroke("agents")}
                  stroke-width={strokeW("agents")}
                />
                <text
                  x={x + AGENT_BOX_W / 2}
                  y={AGENTS_Y + 16}
                  text-anchor="middle"
                  font-family="ui-monospace, monospace"
                  font-size={9}
                  fill="#22d3ee"
                >
                  {n} {AGENT_NAMES[n]}
                </text>
                {/* brain session (dashed) */}
                <rect
                  x={x + 8}
                  y={AGENTS_Y + 24}
                  width={AGENT_BOX_W - 16}
                  height={26}
                  fill="none"
                  stroke="rgba(34,211,238,0.5)"
                  stroke-width={1}
                  stroke-dasharray="3 3"
                />
                <text
                  x={x + AGENT_BOX_W / 2}
                  y={AGENTS_Y + 41}
                  text-anchor="middle"
                  font-family="ui-monospace, monospace"
                  font-size={8}
                  fill="#f4f4f5"
                  opacity={0.7}
                >
                  brain
                </text>
                {/* instruction arrow */}
                <line
                  x1={x + AGENT_BOX_W / 2}
                  y1={AGENTS_Y + 50}
                  x2={x + AGENT_BOX_W / 2}
                  y2={AGENTS_Y + 60}
                  stroke="#22d3ee"
                  stroke-opacity={0.6}
                  stroke-width={1}
                  marker-end="url(#sys-arrow)"
                />
                {/* agent session (solid) */}
                <rect
                  x={x + 8}
                  y={AGENTS_Y + 62}
                  width={AGENT_BOX_W - 16}
                  height={26}
                  fill="none"
                  stroke="rgba(244,244,245,0.5)"
                  stroke-width={1}
                />
                <text
                  x={x + AGENT_BOX_W / 2}
                  y={AGENTS_Y + 79}
                  text-anchor="middle"
                  font-family="ui-monospace, monospace"
                  font-size={8}
                  fill="#f4f4f5"
                  opacity={0.7}
                >
                  agent
                </text>
              </g>
            );
          })}
          <text x={60} y={AGENTS_Y + AGENT_BOX_H + 16} font-family="ui-monospace, monospace" font-size={9} fill="#f4f4f5" opacity={0.45}>
            6 × devin acp subprocess — 2 ACP sessions each = 12 sessions (JSON-RPC over stdio via acp_client.py)
          </text>

          {/* acp_client strip */}
          <g data-module="acp" class="sys-hit">
            <rect
              x={60}
              y={AGENTS_Y + AGENT_BOX_H + 26}
              width={AGENT_NUMBERS.length * (AGENT_BOX_W + AGENT_GAP) - AGENT_GAP}
              height={26}
              fill="#0a0a0c"
              stroke={stroke("acp")}
              stroke-width={strokeW("acp")}
            />
            <text
              x={60 + (AGENT_NUMBERS.length * (AGENT_BOX_W + AGENT_GAP) - AGENT_GAP) / 2}
              y={AGENTS_Y + AGENT_BOX_H + 43}
              text-anchor="middle"
              font-family="ui-monospace, monospace"
              font-size={10}
              fill="#f4f4f5"
              opacity={0.8}
            >
              acp_client.py — typed errors: AcpProcessCrashed · AcpTransportError · AcpTimeoutError
            </text>
          </g>

          {/* ── State column (right) ─────────────────────────────────── */}
          <g data-module="teamlog" class="sys-hit">
            <rect
              x={690}
              y={250}
              width={170}
              height={56}
              fill="#0a0a0c"
              stroke={stroke("teamlog")}
              stroke-width={strokeW("teamlog")}
            />
            <text x={702} y={270} font-family="ui-monospace, monospace" font-size={10} fill="#f4f4f5">
              team_log.md
            </text>
            <text x={702} y={284} font-family="ui-monospace, monospace" font-size={8} fill="#f4f4f5" opacity={0.5}>
              append-only shared memory
            </text>
            <text x={702} y={296} font-family="ui-monospace, monospace" font-size={8} fill="#f4f4f5" opacity={0.5}>
              agents write · brains read tail
            </text>
          </g>
          {/* agent output → team log */}
          <path
            d="M 650 298 H 686"
            fill="none"
            stroke="#22d3ee"
            stroke-opacity={0.6}
            stroke-width={1}
            marker-end="url(#sys-arrow)"
            class="sys-flow"
          />
          {/* team log tail → brains */}
          <path
            d="M 686 262 H 650"
            fill="none"
            stroke="rgba(244,244,245,0.4)"
            stroke-width={1}
            marker-end="url(#sys-arrow)"
          />

          <g data-module="sessions" class="sys-hit">
            <rect
              x={690}
              y={318}
              width={170}
              height={40}
              fill="#0a0a0c"
              stroke={stroke("sessions")}
              stroke-width={strokeW("sessions")}
            />
            <text x={702} y={336} font-family="ui-monospace, monospace" font-size={10} fill="#f4f4f5">
              sessions_*.json
            </text>
            <text x={702} y={350} font-family="ui-monospace, monospace" font-size={8} fill="#f4f4f5" opacity={0.5}>
              atomic write · resumes on restart
            </text>
          </g>

          {/* ── Interfaces (bottom) ──────────────────────────────────── */}
          <g data-module="webgui" class="sys-hit">
            <rect
              x={60}
              y={440}
              width={240}
              height={56}
              fill="#0a0a0c"
              stroke={stroke("webgui")}
              stroke-width={strokeW("webgui")}
            />
            <text x={74} y={460} font-family="ui-monospace, monospace" font-size={10} fill="#f4f4f5">
              web_gui.py — localhost:8765
            </text>
            <text x={74} y={474} font-family="ui-monospace, monospace" font-size={8} fill="#f4f4f5" opacity={0.5}>
              /api/status · /api/transcript · /api/teamlog
            </text>
            <text x={74} y={486} font-family="ui-monospace, monospace" font-size={8} fill="#f4f4f5" opacity={0.5}>
              restart countdown · seed / wrap-up
            </text>
          </g>
          <line x1={180} y1={436} x2={180} y2={396} stroke="rgba(244,244,245,0.3)" stroke-width={1} marker-end="url(#sys-arrow)" />

          <g data-module="sendcmd" class="sys-hit">
            <rect
              x={330}
              y={440}
              width={240}
              height={56}
              fill="#0a0a0c"
              stroke={stroke("sendcmd")}
              stroke-width={strokeW("sendcmd")}
            />
            <text x={344} y={460} font-family="ui-monospace, monospace" font-size={10} fill="#f4f4f5">
              send_command.py → commands.json
            </text>
            <text x={344} y={474} font-family="ui-monospace, monospace" font-size={8} fill="#f4f4f5" opacity={0.5}>
              seed &quot;text&quot; — inject into team log
            </text>
            <text x={344} y={486} font-family="ui-monospace, monospace" font-size={8} fill="#f4f4f5" opacity={0.5}>
              wrap-up — finish cycle, summarize, stop
            </text>
          </g>
          <line x1={450} y1={436} x2={450} y2={396} stroke="rgba(244,244,245,0.3)" stroke-width={1} marker-end="url(#sys-arrow)" />

          <g data-module="docsagent" class="sys-hit">
            <rect
              x={600}
              y={440}
              width={260}
              height={56}
              fill="#0a0a0c"
              stroke={stroke("docsagent")}
              stroke-width={strokeW("docsagent")}
            />
            <text x={614} y={460} font-family="ui-monospace, monospace" font-size={10} fill="#f4f4f5">
              docs_agent.py
            </text>
            <text x={614} y={474} font-family="ui-monospace, monospace" font-size={8} fill="#f4f4f5" opacity={0.5}>
              AST scan → README · ARCHITECTURE ·
            </text>
            <text x={614} y={486} font-family="ui-monospace, monospace" font-size={8} fill="#f4f4f5" opacity={0.5}>
              CHANGELOG · docs/api.md
            </text>
          </g>

          <text x={60} y={536} font-family="ui-monospace, monospace" font-size={9} fill="#f4f4f5" opacity={0.35}>
            hover a block for its role — click to pin
          </text>
        </svg>
      </div>

      {/* Detail panel */}
      <div
        aria-live="polite"
        style={{
          marginTop: "0.5rem",
          padding: "0.75rem 1rem",
          minHeight: "64px",
          background: "#0a0a0c",
          border: active
            ? "1px solid rgba(34, 211, 238, 0.4)"
            : "1px solid rgba(244, 244, 245, 0.1)",
          fontFamily: "ui-monospace, monospace",
          fontSize: "11px",
          lineHeight: 1.7,
          color: "#f4f4f5",
        }}
      >
        {active ? (
          <>
            <span style={{ color: "#22d3ee" }}>{active.file}</span>
            {"  —  "}
            <span style={{ opacity: 0.9 }}>{active.label}</span>
            <div style={{ opacity: 0.65, marginTop: "0.25rem" }}>{active.purpose}</div>
          </>
        ) : (
          <span style={{ opacity: 0.4 }}>
            module details appear here — hover or click any block above
          </span>
        )}
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
        <span style={{ color: "#22d3ee" }}>Figure 1.</span> System architecture.
        run.py wraps the Orchestrator in a re-exec loop; the Orchestrator cycles
        the fixed 13-turn schedule across six devin acp subprocesses, each hosting
        a brain session (decides the work) and an agent session (does the work).
        All agent output is appended to a shared team log that every brain reads.
      </figcaption>
    </figure>
  );
});
