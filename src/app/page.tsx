import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { RecruiterHighlights } from "@/components/sections/RecruiterHighlights";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      
      <Hero />
      <RecruiterHighlights />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Certifications />
      <Contact />
      
      <Footer />
    </main>
  );
}
