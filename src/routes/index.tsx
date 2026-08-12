import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { PaperLayout } from "../components/research";
import { MonolithScene } from "../components/monolith/monolith-scene";
import { SoundToggle } from "../components/monolith/sound-toggle";
import { FaceNav } from "../components/monolith/face-nav";
import { ScrollProgress } from "../components/monolith/scroll-progress";
import { CrossNav } from "../components/monolith/cross-nav";
import { BUILD_CYCLE } from "~/data/log-excerpt";

// Section anchors that exist on this route — used by FaceNav.
const RESEARCH_SECTIONS = [
  { id: "hero", label: "Monolith" },
  { id: "abstract", label: "Abstract" },
  { id: "methodology", label: "Methodology" },
  { id: "architecture", label: "Architecture" },
  { id: "results", label: "Results" },
  { id: "discussion", label: "Discussion" },
];

export default component$(() => {
  return (
    <main id="main" class="monolith">
      <CrossNav />
      <MonolithScene />
      <PaperLayout />
      <SoundToggle />
      <FaceNav sections={RESEARCH_SECTIONS} />
      <ScrollProgress />
      <footer
        style={{
          textAlign: "center",
          padding: "var(--space-lg) var(--space-md)",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--monolith-accent)",
          opacity: 0.6,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Built by the system this site describes
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--monolith-white)",
            opacity: 0.3,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginTop: "0.5rem",
          }}
        >
          Cycle {BUILD_CYCLE} complete. Built blind. Verified pending.
        </div>
      </footer>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Thomas Powell — Digital Monolith",
  meta: [
    {
      name: "description",
      content:
        "An immersive 3D research paper presenting the Devin Autopilot multi-agent system as impossible architecture. Built by the system it describes.",
    },
    {
      name: "keywords",
      content:
        "multi-agent system, autonomous software development, Devin Autopilot, Three.js, research paper",
    },
    { name: "theme-color", content: "#050505" },
    { property: "og:title", content: "Thomas Powell — Digital Monolith" },
    {
      property: "og:description",
      content:
        "An immersive 3D research paper presenting the Devin Autopilot multi-agent system as impossible architecture. Built by the system it describes.",
    },
    { property: "og:type", content: "website" },
  ],
};
