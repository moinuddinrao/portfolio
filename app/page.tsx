import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}
