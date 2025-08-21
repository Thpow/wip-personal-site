import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { NavBar } from "~/components/navigation/NavBar";
import { HeroSection } from "~/components/hero/HeroSection";
import { AboutSection } from "~/components/about/AboutSection";
import { ProjectsSection } from "~/components/projects/ProjectsSection";
import { ContactSection } from "~/components/contact/ContactSection";

export default component$(() => {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "John Doe - Full-Stack Developer Portfolio",
  meta: [
    {
      name: "description",
      content: "Full-Stack Developer specializing in scalable web applications, microservices architecture, and innovative digital solutions. View my projects and get in touch.",
    },
    {
      name: "keywords",
      content: "full-stack developer, web development, React, Node.js, TypeScript, portfolio, software engineer",
    },
    {
      property: "og:title",
      content: "John Doe - Full-Stack Developer Portfolio",
    },
    {
      property: "og:description",
      content: "Explore my portfolio of full-stack projects, from e-commerce platforms to data visualization dashboards.",
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
      content: "John Doe - Full-Stack Developer Portfolio",
    },
    {
      name: "twitter:description",
      content: "Full-Stack Developer specializing in scalable web applications and innovative digital solutions.",
    },
  ],
};
