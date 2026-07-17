import { experience } from "@/data/resume";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Experience"
      intro="From business analysis and quality engineering to senior engineering on education platforms and streaming media."
    >
      <ol className="relative space-y-0 border-l border-line pl-6 md:pl-8">
        {experience.map((job, index) => (
          <li key={`${job.company}-${job.role}-${job.dates}`} className="relative pb-12 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[1.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-paper md:-left-[2.05rem]"
            />
            <Reveal delay={Math.min(index * 0.04, 0.2)}>
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-ink md:text-2xl">{job.role}</h3>
                  <p className="mt-1 text-base text-accent-deep">
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {job.company}
                    </a>
                  </p>
                  {job.subtitle ? (
                    <p className="mt-1 text-sm text-muted">{job.subtitle}</p>
                  ) : null}
                </div>
                <p className="shrink-0 text-sm font-medium text-muted">{job.dates}</p>
              </div>

              {job.summary ? (
                <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft">
                  {job.summary}
                  {job.creditHref ? (
                    <>
                      {" "}
                      <a
                        href={job.creditHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-deep underline-offset-4 hover:underline"
                      >
                        View credit
                      </a>
                      .
                    </>
                  ) : null}
                </p>
              ) : null}

              {job.bullets?.length ? (
                <ul className="mt-4 grid gap-2 text-sm text-ink-soft">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {job.achievements?.length ? (
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Achievements
                  </p>
                  <ul className="mt-2 grid gap-2 text-sm text-ink-soft">
                    {job.achievements.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
