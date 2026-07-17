import { interests } from "@/data/resume";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Interests() {
  return (
    <Section
      id="interests"
      eyebrow="Beyond work"
      title="Interests"
      intro="Climbing is the through-line — alongside music, basketball, and staying curious about where the web is headed."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {interests.map((paragraph, index) => (
          <Reveal key={paragraph.slice(0, 24)} delay={index * 0.05}>
            <p className="text-[0.98rem] leading-relaxed text-ink-soft">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
