import { keySkills, skillGroups } from "@/data/resume";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Skills"
      intro="Senior engineering across frontend, backend and delivery tooling — with performance, observability and production-ready quality in mind."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={Math.min(index * 0.05, 0.15)}>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-12">
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          How I work
        </h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {keySkills.map((skill) => (
            <li
              key={skill}
              className="flex gap-3 text-sm leading-relaxed text-ink-soft md:text-[0.95rem]"
            >
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
