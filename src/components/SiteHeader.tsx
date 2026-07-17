"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { nav, site } from "@/data/resume";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const [active, setActive] = useState<(typeof nav)[number]["id"]>("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);

      const doc = document.documentElement;
      const nearBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 120;

      if (nearBottom) {
        setActive(nav[nav.length - 1].id);
        return;
      }

      const marker = window.scrollY + Math.min(160, window.innerHeight * 0.25);
      let current: (typeof nav)[number]["id"] = nav[0].id;

      for (const item of nav) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = item.id;
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/80 shadow-[0_8px_30px_rgba(11,18,32,0.12)] backdrop-blur-xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <a href="#about" className="display text-xl tracking-tight text-ink md:text-2xl">
          {site.firstName}
          <span className="text-accent"> {site.lastName}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === item.id
                  ? "bg-accent-soft font-medium text-accent-deep"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative flex h-3.5 w-4 flex-col justify-between">
              <span
                className={`block h-0.5 w-full origin-center bg-current transition ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span className={`block h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-full origin-center bg-current transition ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper/95 px-5 py-4 backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-base ${
                  active === item.id ? "bg-accent-soft text-accent-deep" : "text-ink-soft"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}
