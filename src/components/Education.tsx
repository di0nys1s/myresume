import Image from "next/image";
import { education } from "@/data/resume";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Learning"
      title="Education"
      intro="A Master’s in Information Technology from Monash, grounded by economics and statistics, and sharpened by industry practice."
    >
      <div className="space-y-12">
        {education.map((item, index) => (
          <Reveal key={item.school + item.degree} delay={Math.min(index * 0.05, 0.15)}>
            <article className="grid gap-4 border-t border-line pt-8 md:grid-cols-[1fr_auto] md:gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-ink">{item.school}</h3>
                {item.faculty ? (
                  <p className="mt-1 text-sm uppercase tracking-[0.12em] text-muted">
                    {item.faculty}
                  </p>
                ) : null}
                <p className="mt-3 text-lg text-ink-soft">{item.degree}</p>
                {item.location ? (
                  <p className="mt-1 text-sm text-muted">{item.location}</p>
                ) : null}
                {item.details ? (
                  <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-muted">
                    {item.details}
                  </p>
                ) : null}
                {item.skillsImproved ? (
                  <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft">
                    <span className="font-semibold text-ink">Skills improved: </span>
                    {item.skillsImproved}
                  </p>
                ) : null}

                {item.project ? (
                  <div className="mt-8 max-w-3xl">
                    <h4 className="text-lg font-semibold text-ink">{item.project.title}</h4>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                      {item.project.description}
                    </p>
                    <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl bg-ink/5">
                      <Image
                        src={item.project.image}
                        alt="Project Demeter technology stack overview"
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="object-contain p-4"
                      />
                    </div>
                    <a
                      href={item.project.videoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-medium text-accent-deep underline-offset-4 hover:underline"
                    >
                      Watch Demeter product video →
                    </a>
                  </div>
                ) : null}

                {item.courses?.length ? (
                  <div className="mt-8">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      Courses taken
                    </h4>
                    <ul className="mt-3 columns-1 gap-x-10 text-sm text-ink-soft sm:columns-2">
                      {item.courses.map((course) => (
                        <li key={course} className="mb-2 break-inside-avoid">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
              {item.dates ? (
                <p className="text-sm font-medium text-muted md:pt-1">{item.dates}</p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
