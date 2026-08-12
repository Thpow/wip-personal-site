import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { PAPER_SECTIONS } from "~/data/paper";

const HOOK_PHRASE = "this site is the output of the system it describes";

export const Abstract = component$(() => {
  const state = useStore<{ hasAnimated: boolean }>({ hasAnimated: false });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    async ({ cleanup }) => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) {
        state.hasAnimated = true;
        return;
      }

      const el = document.getElementById("abstract-hook");
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !state.hasAnimated) {
              state.hasAnimated = true;
              observer.disconnect();
            }
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(el);
      cleanup(() => observer.disconnect());
    },
    {},
  );

  const abstract = PAPER_SECTIONS.find((s) => s.id === "abstract");
  if (!abstract) return null;

  // Split the abstract at the hook phrase to apply kinetic treatment
  const hookIndex = abstract.content.toLowerCase().indexOf(HOOK_PHRASE);
  const beforeHook = abstract.content.slice(0, hookIndex);
  const hookWords = abstract.content
    .slice(hookIndex, hookIndex + HOOK_PHRASE.length)
    .split(" ");
  const afterHook = abstract.content.slice(hookIndex + HOOK_PHRASE.length);

  const renderHookWords = () => {
    if (state.hasAnimated) {
      // Final state — no animation needed (reduced-motion or post-trigger)
      return <span style={{ fontWeight: 900 }}>{hookWords.join(" ")}</span>;
    }
    return hookWords.map((word, i) => (
      <span
        key={i}
        class="kinetic-word"
        style={{ "--word-index": String(i) } as Record<string, string>}
      >
        {word}
        {i < hookWords.length - 1 ? " " : ""}
      </span>
    ));
  };

  return (
    <section
      data-section="abstract"
      role="region"
      aria-label="Abstract"
      style={{
        maxWidth: "var(--measure)",
        padding: "var(--space-lg) var(--space-md)",
      }}
    >
      <h2
        class="section-heading"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--type-heading)",
          fontWeight: 900,
          letterSpacing: "-0.01em",
          marginBottom: "var(--space-md)",
          color: "var(--monolith-white)",
        }}
      >
        <span style={{ color: "var(--monolith-accent)", marginRight: "0.75rem" }}>
          01
        </span>
        ABSTRACT
      </h2>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--type-body)",
          lineHeight: 1.8,
          color: "var(--monolith-white)",
          opacity: 0.9,
        }}
      >
        {beforeHook}
        <span id="abstract-hook" style={{ display: "inline" }}>
          {renderHookWords()}
        </span>
        {afterHook}
      </p>
    </section>
  );
});
