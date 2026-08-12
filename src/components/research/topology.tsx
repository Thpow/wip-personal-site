import { component$, useStore } from "@builder.io/qwik";
import { AGENTS_BY_NUMBER, CONCURRENT_PAIRS } from "~/data/agents";

// ─── Geometry constants ───────────────────────────────────────────────
const CENTER_X = 400;
const CENTER_Y = 380;
const RADIUS = 180;
const ISO_SCALE = 0.5; // isometric vertical compression (sin 30°)
const COL_WIDTH = 12;
const COL_HEIGHT = 240;
const SHADOW_WIDTH = 8;
const SHADOW_DX = -6; // depth offset (behind, to the left)
const SHADOW_DY = -3; // depth offset (behind, upward)

// Agent → hexagonal face position (clockwise from top).
// Matches the 3D monolith's face mapping: Director on top, Coder front-right.
const AGENT_ANGLES: { agent: number; angle: number }[] = [
  { agent: 3, angle: 270 }, // top
  { agent: 1, angle: 330 }, // top-right
  { agent: 2, angle: 30 }, // bottom-right
  { agent: 4, angle: 90 }, // bottom
  { agent: 6, angle: 150 }, // bottom-left
  { agent: 7, angle: 210 }, // top-left
];

interface ColumnPos {
  agent: number;
  x: number; // base center x
  y: number; // base center y
  topY: number; // top of column
  midY: number; // mid-height
}

function computePositions(): ColumnPos[] {
  return AGENT_ANGLES.map(({ agent, angle }) => {
    const rad = (angle * Math.PI) / 180;
    const x = CENTER_X + RADIUS * Math.cos(rad);
    const y = CENTER_Y + RADIUS * Math.sin(rad) * ISO_SCALE;
    return { agent, x, y, topY: y - COL_HEIGHT, midY: y - COL_HEIGHT / 2 };
  });
}

const POSITIONS = computePositions();

// Lintel beam: polyline connecting all column tops (closes back to first)
const LINTEL_POINTS =
  POSITIONS.map((p) => `${p.x},${p.topY}`).join(" ") +
  ` ${POSITIONS[0]!.x},${POSITIONS[0]!.topY}`;

// Tie-beams for concurrent pairs at mid-height
function posFor(agent: number): ColumnPos {
  return POSITIONS.find((p) => p.agent === agent)!;
}

const TIE_BEAMS = CONCURRENT_PAIRS.map((pair) => {
  const cols = [posFor(pair.primary), ...pair.companions.map(posFor)];
  return {
    key: `${pair.primary}-${pair.companions.join("-")}`,
    points: cols.map((c) => `${c.x},${c.midY}`).join(" "),
  };
});

const AGENT_LABELS: Record<number, string> = {
  1: "1 CODER",
  2: "2 REVIEWER",
  3: "3 DIRECTOR",
  4: "4 QUALITY",
  6: "6 DOCS",
  7: "7 IDEAS",
};

export const Topology = component$(() => {
  const state = useStore<{ hovered: number | null; selected: number | null }>({
    hovered: null,
    selected: null,
  });

  const selectedAgent =
    state.selected !== null ? AGENTS_BY_NUMBER[state.selected] : undefined;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <svg
        viewBox="0 0 800 600"
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Agent topology — six agents as isometric structural columns with brain shadow slabs, lintel beam, and concurrent-pair tie-beams"
      >
        <title>Agent Topology Diagram</title>
        <desc>
          Isometric blueprint showing six agents as structural columns arranged in a
          hexagonal ring. Each column has a translucent shadow slab behind it representing
          the paired brain session. A lintel beam connects all column tops (the shared team
          log). Dashed tie-beams connect concurrent-pair columns at mid-height.
        </desc>
        <style
          dangerouslySetInnerHTML={`
          rect[data-agent]:hover { stroke-opacity: 1.0; }
          rect[data-agent]:focus-visible { stroke-opacity: 1.0; outline: 1px solid #22d3ee; }
        `}
        />
        {/* Lintel beam (shared team log) */}
        <polyline
          points={LINTEL_POINTS}
          fill="none"
          stroke="#22d3ee"
          stroke-opacity={0.4}
          stroke-width={1}
        />
        <text
          x={CENTER_X}
          y={POSITIONS[0]!.topY - 14}
          text-anchor="middle"
          font-family="ui-monospace, monospace"
          font-size={9}
          fill="#f4f4f5"
          opacity={0.6}
        >
          team_log.md
        </text>

        {/* Tie-beams for concurrent pairs */}
        {TIE_BEAMS.map((beam) => (
          <polyline
            key={beam.key}
            points={beam.points}
            fill="none"
            stroke="#22d3ee"
            stroke-opacity={0.3}
            stroke-width={1}
            stroke-dasharray="4 2"
          />
        ))}

        {/* Columns + shadow slabs */}
        {POSITIONS.map((pos) => {
          const isHovered = state.hovered === pos.agent;
          const isSelected = state.selected === pos.agent;
          const colOpacity = isHovered ? 1.0 : 0.6;
          return (
            <g key={pos.agent}>
              {/* Shadow slab (brain) — offset behind column */}
              <rect
                x={pos.x - SHADOW_WIDTH / 2 + SHADOW_DX}
                y={pos.topY + SHADOW_DY}
                width={SHADOW_WIDTH}
                height={COL_HEIGHT}
                fill="#22d3ee"
                opacity={0.15}
              />
              <text
                x={pos.x + SHADOW_DX}
                y={pos.topY + 16}
                text-anchor="middle"
                font-family="ui-monospace, monospace"
                font-size={7}
                fill="#22d3ee"
                opacity={0.3}
              >
                BRAIN
              </text>

              {/* Structural column */}
              <rect
                x={pos.x - COL_WIDTH / 2}
                y={pos.topY}
                width={COL_WIDTH}
                height={COL_HEIGHT}
                fill="#0a0a0c"
                stroke="#22d3ee"
                stroke-opacity={colOpacity}
                stroke-width={isSelected ? 2 : 1}
                data-agent={pos.agent}
                tabindex={0}
                role="button"
                aria-label={`${AGENT_LABELS[pos.agent]} — click or press Enter to view details`}
                style={{ cursor: "pointer", outline: "none" }}
                onMouseEnter$={() => {
                  state.hovered = pos.agent;
                }}
                onMouseLeave$={() => {
                  state.hovered = null;
                }}
                onClick$={() => {
                  state.selected = isSelected ? null : pos.agent;
                }}
                onKeyDown$={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    state.selected = isSelected ? null : pos.agent;
                  }
                }}
              />

              {/* Agent label below column base */}
              <text
                x={pos.x}
                y={pos.y + 22}
                text-anchor="middle"
                font-family="ui-monospace, monospace"
                font-size={11}
                fill={isHovered || isSelected ? "#22d3ee" : "#f4f4f5"}
                opacity={isHovered ? 1.0 : 0.8}
              >
                {AGENT_LABELS[pos.agent]}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Detail panel — docks right when an agent is selected */}
      {selectedAgent && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "240px",
            padding: "1rem 1.25rem",
            background: "#0a0a0c",
            border: "1px solid rgba(244, 244, 245, 0.2)",
            fontFamily: "ui-monospace, monospace",
            fontSize: "12px",
            color: "#f4f4f5",
            lineHeight: 1.6,
          }}
        >
          <div style={{ color: "#22d3ee", marginBottom: "0.5rem" }}>
            AGENT {state.selected}
          </div>
          <div style={{ fontSize: "14px", marginBottom: "0.25rem", fontWeight: 600 }}>
            {selectedAgent.name}
          </div>
          <div style={{ opacity: 0.6, marginBottom: "0.75rem" }}>
            {selectedAgent.role}
          </div>
          <div>{selectedAgent.purpose}</div>
          <button
            style={{
              marginTop: "0.75rem",
              background: "none",
              border: "none",
              color: "#22d3ee",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "11px",
              padding: 0,
            }}
            onClick$={() => {
              state.selected = null;
            }}
          >
            [ close ]
          </button>
        </div>
      )}
    </div>
  );
});
