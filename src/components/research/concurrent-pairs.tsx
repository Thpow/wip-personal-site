import { component$, useStore } from "@builder.io/qwik";
import { CONCURRENT_PAIRS, AGENTS_BY_NUMBER } from "~/data/agents";

// ─── Layout constants ─────────────────────────────────────────────────
const VIEW_W = 800;
const VIEW_H = 360; // fits 2 pair groups (3 beams + 2 beams) with tight gaps
const BEAM_WIDTH = 14;
const BEAM_HEIGHT = 80; // vertical extent reserved per group
const PAIR_GAP = 48; // vertical gap between pair groups
const BEAM_GAP = 30; // vertical gap between parallel beams within a pair
const LABEL_OFFSET = 24; // px below beam base for label

interface Beam {
  agent: number;
  isPrimary: boolean;
  x: number; // beam left x
  y: number; // beam top y
  label: string;
  role: string;
}

interface PairGroup {
  pairIndex: number;
  beams: Beam[];
  tieBeamY: number; // mid-height for tie-beams
  startX: number;
  endX: number;
}

const AGENT_LABELS: Record<number, string> = {
  1: "1 CODER",
  2: "2 REVIEWER",
  3: "3 DIRECTOR",
  4: "4 QUALITY",
  6: "6 DOCS",
  7: "7 IDEAS",
};

function buildPairGroups(): PairGroup[] {
  const groupHeight = BEAM_HEIGHT;
  let currentY = 40;

  return CONCURRENT_PAIRS.map((pair, pairIndex) => {
    const allAgents = [pair.primary, ...pair.companions];
    const beamCount = allAgents.length;
    const groupH = (beamCount - 1) * BEAM_GAP + groupHeight;
    const startX = 80;
    const endX = VIEW_W - 80;

    const beams: Beam[] = allAgents.map((agent, bi) => {
      const agentSpec = AGENTS_BY_NUMBER[agent];
      return {
        agent,
        isPrimary: agent === pair.primary,
        x: startX,
        y: currentY + bi * BEAM_GAP,
        label: AGENT_LABELS[agent] ?? `AGENT ${agent}`,
        role: agentSpec?.role ?? "",
      };
    });

    const tieBeamY = currentY + groupHeight / 2;
    const group: PairGroup = {
      pairIndex,
      beams,
      tieBeamY,
      startX,
      endX,
    };

    currentY += groupH + PAIR_GAP;
    return group;
  });
}

const PAIR_GROUPS = buildPairGroups();

export const ConcurrentPairs = component$(() => {
  const state = useStore<{ hoveredAgent: number | null }>({
    hoveredAgent: null,
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="Concurrent pairs — two concurrent-pair relationships shown as parallel load-bearing beams with tie-beams"
      >
        <title>Concurrent Pairs Diagram</title>
        <desc>
          Two concurrent-pair relationships rendered as parallel load-bearing beams. The
          first group shows Agent 1 (Coder) running with companions 2 (Reviewer) and 4
          (Quality). The second group shows Agent 6 (Documentation) running with companion
          7 (Ideas). Dashed tie-beams connect the parallel beams at left and right ends.
        </desc>
        <style
          dangerouslySetInnerHTML={`
          rect[data-agent]:hover { stroke-opacity: 1.0; }
          rect[data-agent]:focus-visible { stroke-opacity: 1.0; outline: 1px solid #22d3ee; }
        `}
        />
        {PAIR_GROUPS.map((group) => (
          <g key={group.pairIndex}>
            {/* Parallel beams */}
            {group.beams.map((beam) => {
              const isHovered = state.hoveredAgent === beam.agent;
              const opacity = isHovered ? 1.0 : 0.6;
              const strokeWidth = beam.isPrimary ? 1.5 : 1;
              const beamLen = group.endX - group.startX;

              return (
                <g key={beam.agent}>
                  <rect
                    x={beam.x}
                    y={beam.y}
                    width={beamLen}
                    height={BEAM_WIDTH}
                    fill="#0a0a0c"
                    stroke="#22d3ee"
                    stroke-opacity={opacity}
                    stroke-width={strokeWidth}
                    data-agent={beam.agent}
                    tabindex={0}
                    role="button"
                    aria-label={`${beam.label}${beam.isPrimary ? " (primary writer)" : " (read-only companion)"}`}
                    style={{ cursor: "pointer", outline: "none" }}
                    onMouseEnter$={() => {
                      state.hoveredAgent = beam.agent;
                    }}
                    onMouseLeave$={() => {
                      state.hoveredAgent = null;
                    }}
                    onKeyDown$={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        state.hoveredAgent =
                          state.hoveredAgent === beam.agent ? null : beam.agent;
                      }
                    }}
                  />
                  {/* Primary beam marker — small cyan cap on the left */}
                  {beam.isPrimary && (
                    <rect
                      x={beam.x - 4}
                      y={beam.y - 2}
                      width={4}
                      height={BEAM_WIDTH + 4}
                      fill="#22d3ee"
                      opacity={0.6}
                    />
                  )}
                  {/* Beam label */}
                  <text
                    x={beam.x}
                    y={beam.y + BEAM_WIDTH + LABEL_OFFSET}
                    font-family="ui-monospace, monospace"
                    font-size={11}
                    fill={isHovered ? "#22d3ee" : "#f4f4f5"}
                    opacity={isHovered ? 1.0 : 0.8}
                  >
                    {beam.label}
                    {beam.isPrimary ? " ◆ PRIMARY" : ""}
                  </text>
                  {/* Role annotation */}
                  <text
                    x={beam.x}
                    y={beam.y + BEAM_WIDTH + LABEL_OFFSET + 14}
                    font-family="ui-monospace, monospace"
                    font-size={9}
                    fill="#f4f4f5"
                    opacity={0.4}
                  >
                    {beam.role}
                  </text>
                </g>
              );
            })}

            {/* Tie-beams connecting parallel beams at mid-height */}
            {group.beams.slice(1).map((beam, bi) => {
              const prevBeam = group.beams[bi]!;
              const tieX1 = group.startX + 40;
              const tieX2 = group.endX - 40;
              const y1 = prevBeam.y + BEAM_WIDTH / 2;
              const y2 = beam.y + BEAM_WIDTH / 2;
              return (
                <g key={`tie-${group.pairIndex}-${bi}`}>
                  {/* Tie-beam at left */}
                  <line
                    x1={tieX1}
                    y1={y1}
                    x2={tieX1}
                    y2={y2}
                    stroke="#22d3ee"
                    stroke-opacity={0.3}
                    stroke-width={1}
                    stroke-dasharray="4 2"
                  />
                  {/* Tie-beam at right */}
                  <line
                    x1={tieX2}
                    y1={y1}
                    x2={tieX2}
                    y2={y2}
                    stroke="#22d3ee"
                    stroke-opacity={0.3}
                    stroke-width={1}
                    stroke-dasharray="4 2"
                  />
                </g>
              );
            })}
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div
        style={{
          marginTop: "0.5rem",
          padding: "0.5rem 0.75rem",
          fontFamily: "ui-monospace, monospace",
          fontSize: "10px",
          color: "#f4f4f5",
          opacity: 0.5,
          lineHeight: 1.6,
        }}
      >
        <span style={{ color: "#22d3ee" }}>◆</span> primary writer
        {"   "}
        <span style={{ color: "#22d3ee", opacity: 0.3 }}>┊</span> tie-beam
        (read-only companion runs simultaneously)
      </div>
    </div>
  );
});
