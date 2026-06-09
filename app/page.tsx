import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

/* Testimonials are intentionally omitted until real quotes exist (see CLAUDE.md
   and content/site.ts) — no fabricated reviews. */

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Stats />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
