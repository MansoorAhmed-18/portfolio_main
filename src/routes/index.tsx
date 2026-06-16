import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { About, Skills, Experience, Projects, Awards, Education, Contact, Footer } from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mansoor Ahmed — Frontend Developer & Aspiring Data Analyst" },
      { name: "description", content: "Portfolio of Mansoor Ahmed N.G — Frontend Developer and aspiring Data Analyst from Chennai, India. Projects in Python, SQL, LangChain, Power BI." },
      { property: "og:title", content: "Mansoor Ahmed — Portfolio" },
      { property: "og:description", content: "Frontend Developer & aspiring Data Analyst from Chennai, India." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-darker text-cream min-h-screen">
      <CursorGlow />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
