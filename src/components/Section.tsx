import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  intro?: string;
};

export function Section({ id, eyebrow, title, children, intro }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="display text-4xl text-ink md:text-5xl">{title}</h2>
          {intro ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {intro}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
