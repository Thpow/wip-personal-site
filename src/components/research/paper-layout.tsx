import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { PAPER_SECTIONS } from "~/data/paper";
import { TurnCycle } from "./turn-cycle";
import { SystemDiagram } from "./system-diagram";
import { SystemDiagram3D } from "./system-diagram-3d";
import { TurnSequence } from "./turn-sequence";
import { Abstract } from "./abstract";
import { Methodology } from "./methodology";
import { Results } from "./results";
import { Discussion } from "./discussion";
import { AgentDetail } from "./agent-detail";

// Section index → two-digit prefix for TOC entries ("01", "02", ...)
function sectionNumber(i: number): string {
  return String(i + 1).padStart(2, "0");
}

// Render paper content for the architecture section (the only section without
// a dedicated component): split on double-newline paragraphs, ## → h3
function renderParagraphs(content: string) {
  return content.split("\n\n").map((para, i) => {
    if (para.startsWith("## ")) {
      return (
        <h3
          key={i}
          class="subsection-heading"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--type-mono)",
            color: "var(--monolith-white)",
            opacity: 0.5,
            marginTop: "var(--space-md)",
            marginBottom: "0.75rem",
            letterSpacing: "0.05em",
          }}
        >
          {para.slice(3)}
        </h3>
      );
    }
    return (
      <p
        key={i}
        style={{
          marginBottom: "1rem",
          lineHeight: 1.7,
          color: "#f4f4f5",
        }}
      >
        {para}
      </p>
    );
  });
}

export const PaperLayout = component$(() => {
  const toc = useStore<{ activeSection: string }>({
    activeSection: PAPER_SECTIONS[0]!.id,
  });

  // IntersectionObserver: highlight TOC entry for the section in viewport center
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    async ({ cleanup }) => {
      const sectionIds = PAPER_SECTIONS.map((s) => s.id);
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              toc.activeSection = entry.target.id;
            }
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
      cleanup(() => observer.disconnect());
    },
    {},
  );

  return (
    <>
      <style
        dangerouslySetInnerHTML={`
        /* One shared prose measure so every section and figure aligns to the
           same left edge. Figures span the full content column. */
        .paper-grid { --measure: 68ch; }
        /* Sections previously mixed auto-centring with their own padding,
           producing three different left edges down the page. Force every
           section flush to the content column; width is controlled by
           --measure on prose and 100% on figures. */
        .paper-grid section {
          scroll-margin-top: 5rem;
          margin-left: 0 !important;
          margin-right: 0 !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        @media (max-width: 900px) {
          .paper-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 1.5rem !important;
            padding: 2rem 1.25rem !important;
          }
          /* The sticky TOC becomes a horizontal scroller above the content */
          .paper-toc {
            position: static !important;
            display: flex;
            gap: 1rem;
            overflow-x: auto;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(244,244,245,0.12);
          }
          .paper-toc > div:first-child { display: none; }
          .paper-toc a { white-space: nowrap; }
        }
        @media (prefers-reduced-motion: reduce) {
          .toc-link { transition: none !important; }
        }
      `}
      />
    <div
      id="research"
      class="paper-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "190px minmax(0, 1fr)",
        gap: "3rem",
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "3rem 2rem",
      }}
    >
      {/* Sticky table of contents */}
      <nav
        aria-label="Paper sections"
        class="paper-toc"
        style={{
          position: "sticky",
          top: "5rem",
          alignSelf: "start",
          fontFamily: "ui-monospace, monospace",
          fontSize: "12px",
          lineHeight: 2,
        }}
      >
        <div
          style={{
            color: "var(--monolith-white)",
            opacity: 0.5,
            marginBottom: "0.75rem",
            letterSpacing: "0.1em",
          }}
        >
          CONTENTS
        </div>
        {PAPER_SECTIONS.map((section, i) => {
          const isActive = toc.activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              class="toc-link"
              style={{
                display: "block",
                color: isActive ? "#22d3ee" : "#f4f4f5",
                opacity: isActive ? 1.0 : 0.5,
                textDecoration: "none",
                transition: "opacity 0.2s, color 0.2s",
                paddingLeft: isActive ? "0.5rem" : 0,
                borderLeft: isActive
                  ? "1px solid #22d3ee"
                  : "1px solid transparent",
              }}
            >
              {sectionNumber(i)} {section.title.toUpperCase()}
            </a>
          );
        })}
      </nav>

      {/* Paper body — uses dedicated components for 4 sections, inline for architecture */}
      <article>
        {/* Abstract — kinetic headline component */}
        <div id="abstract" style={{ scrollMarginTop: "2rem" }}>
          <Abstract />
        </div>

        {/* Methodology — two-column with Topology SVG */}
        <div id="methodology" style={{ scrollMarginTop: "2rem" }}>
          <Methodology />
        </div>

        {/* Architecture — inline (no dedicated component), TurnCycle below */}
        <section
          id="architecture"
          data-section="architecture"
          style={{
            marginBottom: "4rem",
            scrollMarginTop: "2rem",
          }}
        >
          <h2
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "var(--type-heading, clamp(1.5rem, 3vw, 3rem))",
              fontWeight: 900,
              color: "#f4f4f5",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ color: "#22d3ee", marginRight: "0.75rem" }}>
              03
            </span>
            ARCHITECTURE
          </h2>
          <div style={{ maxWidth: "var(--measure)" }}>
            {renderParagraphs(
              PAPER_SECTIONS.find((s) => s.id === "architecture")!.content,
            )}
          </div>

          {/* Figure 1 — interactive system architecture blueprint */}
          <div
            style={{
              marginTop: "2.5rem",
              maxWidth: "100%",
              margin: "2.5rem 0 0",
            }}
          >
            <SystemDiagram />
          </div>

          {/* Figure 1b — 3D system architecture graph */}
          <div
            style={{
              marginTop: "2.5rem",
              maxWidth: "100%",
              margin: "2.5rem 0 0",
            }}
          >
            <SystemDiagram3D />
          </div>

          {/* Figure 2 — per-turn sequence diagram + failure handling */}
          <div
            style={{
              marginTop: "3rem",
              maxWidth: "100%",
              margin: "3rem 0 0",
            }}
          >
            <TurnSequence />
          </div>

          {/* Figure 3 — turn-cycle Penrose staircase */}
          <div
            style={{
              marginTop: "3rem",
              maxWidth: "100%",
              margin: "3rem 0 0",
            }}
          >
            <TurnCycle />
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
              <span style={{ color: "#22d3ee" }}>Figure 3.</span> The 13-turn
              schedule as a Penrose staircase. Each vertex is one turn, landing
              on the acting agent's column; concurrent-pair turns cluster. The
              path ascends forever — the loop never terminates by design.
            </figcaption>
          </div>
        </section>

        {/* Results — self-referential statement component */}
        <div id="results" style={{ scrollMarginTop: "2rem" }}>
          <Results />
        </div>

        {/* Discussion — two-column with ConcurrentPairs SVG */}
        <div id="discussion" style={{ scrollMarginTop: "2rem" }}>
          <Discussion />
        </div>
      </article>
    </div>

    {/* Agent Detail — interactive agent selector (standalone, after paper) */}
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "3rem 2rem" }}>
      <AgentDetail />
    </div>
    </>
  );
});
