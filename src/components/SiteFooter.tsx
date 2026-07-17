import { site, social } from "@/data/resume";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line pb-10 pt-14">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display text-3xl text-ink md:text-4xl">
            {site.firstName} <span className="text-accent">{site.lastName}</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            Senior Software Engineer based in {site.location}. Open to meaningful product
            work and conversations.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex flex-wrap gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink-soft underline-offset-4 hover:text-accent hover:underline"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${site.email}`}
            className="text-sm font-medium text-accent-deep underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
          <p className="text-xs text-muted">© {year} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
