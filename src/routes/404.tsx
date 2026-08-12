import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "var(--monolith-black, #0a0a0c)",
        textAlign: "center",
        padding: "var(--space-md, 2rem)",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-mono, ui-monospace, monospace)",
          fontSize: "var(--type-display, clamp(3rem, 8vw, 8rem))",
          fontWeight: 900,
          color: "var(--monolith-white, #f4f4f5)",
          letterSpacing: "-0.04em",
          margin: 0,
        }}
      >
        VOID
      </h1>
      <p
        style={{
          fontFamily: "var(--font-mono, ui-monospace, monospace)",
          fontSize: "var(--type-mono, 0.875rem)",
          color: "var(--monolith-accent, #22d3ee)",
          opacity: 0.6,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginTop: "var(--space-md, 2rem)",
        }}
      >
        The structure has no face here.
      </p>
      <a
        href="/"
        style={{
          fontFamily: "var(--font-mono, ui-monospace, monospace)",
          fontSize: "var(--type-mono, 0.875rem)",
          color: "var(--monolith-accent, #22d3ee)",
          opacity: 0.8,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textDecoration: "none",
          marginTop: "var(--space-sm, 1rem)",
          borderBottom: "1px solid var(--monolith-accent, #22d3ee)",
          paddingBottom: "0.25rem",
        }}
      >
        Return to the monolith
      </a>
    </main>
  );
});

export const head: DocumentHead = {
  title: "404 — Void",
};
