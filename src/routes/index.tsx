import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education } from "@/components/portfolio/AboutEducation";
import { Skills, Services } from "@/components/portfolio/SkillsServices";
import { Projects, Achievements } from "@/components/portfolio/ProjectsAchievements";
import { Beyond, Vision } from "@/components/portfolio/BeyondVision";
import { Contact, Footer } from "@/components/portfolio/ContactFooter";

const TITLE = "Samia Parvin Ananna — IT & Management Student, Dhaka";
const DESCRIPTION =
  "Portfolio of Samia Parvin Ananna: Information Technology & Management student at Daffodil International University, future entrepreneur, and business & IT consultant.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Achievements />
        <Beyond />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
