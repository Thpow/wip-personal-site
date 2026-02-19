import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { NavBar } from "~/components/navigation/NavBar";
import { HeroSection } from "~/components/hero/HeroSection";
import { AboutSection } from "~/components/about/AboutSection";
import { ExperienceSection } from "~/components/experience/ExperienceSection";
import { EducationSection } from "~/components/education/EducationSection";
import { ProjectsSection } from "~/components/projects/ProjectsSection";

export default component$(() => {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Thomas Powell - Technical Intern & Computer Science Student",
  meta: [
    {
      name: "description",
      content: "Technical Intern at SAS specializing in cloud engineering, DevOps, and full-stack development. UNC Charlotte Computer Science and Data Science student.",
    },
    {
      name: "keywords",
      content: "Thomas Powell, SAS intern, cloud engineering, DevOps, full-stack developer, Python, AWS, Docker, Kubernetes, UNC Charlotte",
    },
    {
      property: "og:title",
      content: "Thomas Powell - Technical Intern & Computer Science Student",
    },
    {
      property: "og:description",
      content: "Explore my portfolio of enterprise projects at SAS, including cloud infrastructure, automation tools, and web applications.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Thomas Powell - Technical Intern & Computer Science Student",
    },
    {
      name: "twitter:description",
      content: "Technical Intern at SAS specializing in cloud engineering, DevOps, and full-stack development.",
    },
  ],
};
