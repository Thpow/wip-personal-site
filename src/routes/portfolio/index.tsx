import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SoundToggle } from "../../components/monolith/sound-toggle";
import { FaceNav } from "../../components/monolith/face-nav";
import { ScrollProgress } from "../../components/monolith/scroll-progress";
import { CrossNav } from "../../components/monolith/cross-nav";
import {
  ProfileSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from "../../components/sections";

// Section anchors that exist on this route — used by FaceNav.
const PORTFOLIO_SECTIONS = [
  { id: "profile", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default component$(() => {
  return (
    <main id="main" class="monolith">
      <CrossNav />
      {/* WIP / stale-content notice — portfolio info is ~2 years out of date */}
      <div
        role="alert"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "1.25rem 2rem",
          borderBottom: "1px solid rgba(229, 57, 53, 0.35)",
          background: "rgba(229, 57, 53, 0.06)",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          lineHeight: 1.6,
          color: "#f4f4f5",
          letterSpacing: "0.02em",
        }}
      >
        <span
          style={{
            color: "#ff6b6b",
            fontWeight: 900,
            letterSpacing: "0.18em",
            marginRight: "0.6rem",
          }}
        >
          ⚠ WIP
        </span>
        This portfolio is a work in progress. The experience, projects, and
        skills below are approximately two years out of date and are being
        refreshed. See the Research page for current work.
      </div>
      <ProfileSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <SoundToggle />
      <FaceNav sections={PORTFOLIO_SECTIONS} />
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
        Thomas Powell — Portfolio
      </footer>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Thomas Powell — Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Profile, experience, projects, skills, and contact for Thomas Powell.",
    },
    { name: "theme-color", content: "#050505" },
    { property: "og:title", content: "Thomas Powell — Portfolio" },
    {
      property: "og:description",
      content:
        "Profile, experience, projects, skills, and contact for Thomas Powell.",
    },
    { property: "og:type", content: "website" },
  ],
};
