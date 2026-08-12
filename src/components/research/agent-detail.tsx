import { component$, useStore } from "@builder.io/qwik";
import { AGENTS, TURN_ORDER, BRAIN_AGENT_PAIRING } from "~/data/agents";

export const AgentDetail = component$(() => {
  // Default to agent 3 (Director) — opens and closes each cycle
  const state = useStore<{ agentNumber: number }>({ agentNumber: 3 });

  const agent = AGENTS.find((a) => a.number === state.agentNumber);
  if (!agent) return null;

  // Count how many times this agent appears in the 13-turn cycle
  const turnCount = TURN_ORDER.filter((n) => n === agent.number).length;

  return (
    <section
      data-section="agent-detail"
      role="region"
      aria-label="Agent Detail"
      style={{
        background: "var(--monolith-black)",
        color: "var(--monolith-white)",
        padding: "var(--space-lg) var(--space-md)",
        maxWidth: "var(--measure)",
        borderTop: "1px solid rgba(244, 244, 245, 0.15)",
      }}
    >
      {/* Agent selector — monospace buttons for all 6 agents */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "var(--space-md)",
        }}
      >
        {AGENTS.map((a) => {
          const isActive = state.agentNumber === a.number;
          return (
            <button
              key={a.number}
              onClick$={() => {
                state.agentNumber = a.number;
              }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                padding: "0.3rem 0.7rem",
                border: "1px solid var(--monolith-accent)",
                color: isActive
                  ? "var(--monolith-black)"
                  : "var(--monolith-accent)",
                background: isActive
                  ? "var(--monolith-accent)"
                  : "transparent",
                opacity: isActive ? 1 : 0.5,
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              {a.number} {a.name.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Agent name — carved inscription */}
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "1.75rem",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          color: "var(--monolith-white)",
          marginBottom: "0.25rem",
        }}
      >
        Agent {agent.number}: {agent.name}
      </div>

      {/* Role — cyan monospace */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--type-mono)",
          color: "var(--monolith-white)",
          opacity: 0.6,
          marginBottom: "var(--space-sm)",
          letterSpacing: "0.02em",
        }}
      >
        {agent.role}
      </div>

      {/* Purpose — body text */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--type-body)",
          lineHeight: 1.7,
          maxWidth: "var(--measure)",
          color: "var(--monolith-white)",
          opacity: 0.85,
          marginBottom: "var(--space-md)",
        }}
      >
        {agent.purpose}
      </p>

      {/* Write permission + output contract — from the real role prompts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "0.75rem",
          marginBottom: "var(--space-md)",
        }}
      >
        <div
          style={{
            padding: "0.6rem 0.8rem",
            border: "1px solid rgba(244, 244, 245, 0.12)",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            lineHeight: 1.7,
          }}
        >
          <div style={{ color: "var(--monolith-accent)", letterSpacing: "0.1em", fontSize: "10px" }}>
            WRITE PERMISSION
          </div>
          <div style={{ opacity: 0.8 }}>{agent.writes}</div>
        </div>
        <div
          style={{
            padding: "0.6rem 0.8rem",
            border: "1px solid rgba(244, 244, 245, 0.12)",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            lineHeight: 1.7,
          }}
        >
          <div style={{ color: "var(--monolith-accent)", letterSpacing: "0.1em", fontSize: "10px" }}>
            OUTPUT CONTRACT
          </div>
          <div style={{ opacity: 0.8 }}>{agent.outputContract}</div>
        </div>
      </div>

      {/* DO / DON'T — the structural separation of concerns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "0.75rem",
          marginBottom: "var(--space-md)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            lineHeight: 1.9,
          }}
        >
          <div style={{ color: "var(--monolith-accent)", letterSpacing: "0.1em", fontSize: "10px", marginBottom: "0.3rem" }}>
            DO
          </div>
          {agent.does.map((item) => (
            <div key={item} style={{ opacity: 0.75 }}>
              + {item}
            </div>
          ))}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            lineHeight: 1.9,
          }}
        >
          <div style={{ color: "var(--monolith-white)", opacity: 0.5, letterSpacing: "0.1em", fontSize: "10px", marginBottom: "0.3rem" }}>
            DON'T (owned by another agent)
          </div>
          {agent.doesNot.map((item) => (
            <div key={item} style={{ opacity: 0.5 }}>
              − {item}
            </div>
          ))}
        </div>
      </div>

      {/* Brain-agent pairing description */}
      <div
        style={{
          borderTop: "1px solid rgba(244, 244, 245, 0.08)",
          paddingTop: "var(--space-sm)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--monolith-white)",
            opacity: 0.5,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Brain Pairing
        </div>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--type-body)",
            lineHeight: 1.7,
            color: "var(--monolith-white)",
            opacity: 0.75,
          }}
        >
          {BRAIN_AGENT_PAIRING.description}
        </p>
      </div>

      {/* Turn frequency — monospace data line */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--monolith-white)",
          opacity: 0.6,
          marginTop: "var(--space-sm)",
        }}
      >
        appears {turnCount} {turnCount === 1 ? "time" : "times"} per 13-turn cycle
      </div>
    </section>
  );
});
