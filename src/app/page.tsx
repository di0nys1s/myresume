import { Awards } from "@/components/Awards";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Interests } from "@/components/Interests";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <hr className="hairline section-shell" />
        <Skills />
        <hr className="hairline section-shell" />
        <Experience />
        <hr className="hairline section-shell" />
        <Education />
        <hr className="hairline section-shell" />
        <Interests />
        <hr className="hairline section-shell" />
        <Awards />
      </main>
      <SiteFooter />
    </>
  );
}
