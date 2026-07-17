import { awards } from "@/data/resume";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Awards() {
  return (
    <Section
      id="awards"
      eyebrow="Recognition"
      title="Awards & certifications"
    >
      <ul className="space-y-4">
        {awards.map((award, index) => (
          <Reveal key={award.title} delay={index * 0.05}>
            <li className="flex gap-4 border-t border-line pt-4">
              <span
                aria-hidden
                className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-sm font-semibold text-accent-deep"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-1.5 text-base text-ink-soft md:text-lg">
                {award.href ? (
                  <a href={award.href} className="text-ink hover:text-accent">
                    {award.title}
                  </a>
                ) : (
                  award.title
                )}
              </p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
