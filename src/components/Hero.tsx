import { about, site, social } from "@/data/resume";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.84v1.98h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.67c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.73-2.55 3.52V23h-4V8.5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.77-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58C20.57 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[rgba(36,72,110,0.12)] blur-3xl dark:bg-[rgba(61,171,165,0.08)]" />
      </div>

      <div className="section-shell relative max-w-4xl pb-12 pt-8 md:pb-16 md:pt-14">
        <h1 className="display animate-rise text-[clamp(3.4rem,11vw,7rem)] leading-[0.92] text-ink">
          {site.firstName}{" "}
          <span className="text-accent">{site.lastName}</span>
        </h1>
        <p className="animate-rise animate-rise-delay-1 mt-5 text-xl font-medium text-ink-soft md:text-2xl">
          {site.title}
        </p>
        <p className="animate-rise animate-rise-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {about.lead}
        </p>

        <div className="animate-rise animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent-deep"
            >
              <SocialIcon label={item.label} />
              {item.label}
            </a>
          ))}
        </div>

        <dl className="animate-rise animate-rise-delay-3 mt-10 grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted">Location</dt>
            <dd className="mt-1 font-medium text-ink">{site.location}</dd>
          </div>
          <div>
            <dt className="text-muted">Phone</dt>
            <dd className="mt-1 font-medium text-ink">
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">Email</dt>
            <dd className="mt-1 break-all font-medium text-ink">
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </dd>
          </div>
        </dl>

        <p className="animate-rise animate-rise-delay-3 mt-10 max-w-3xl text-[0.98rem] leading-relaxed text-ink-soft md:text-base">
          {about.bio}
        </p>
      </div>
    </section>
  );
}
