import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
