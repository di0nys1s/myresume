import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/data/resume";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Burak Seyhan is a Senior Software Engineer at DPG Media (Videoland), based in Amsterdam — building modern streaming and web products with React, TypeScript and Next.js.",
  keywords: [
    "Burak Seyhan",
    "Senior Software Engineer",
    "Frontend",
    "DPG Media",
    "Videoland",
    "RTL",
    "React",
    "Next.js",
    "TypeScript",
    "Amsterdam",
    "Netherlands",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.title}`,
    description:
      "Senior Software Engineer on Videoland at DPG Media. ACS Certified, Master’s in Information Technology.",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: `${site.name} — ${site.title}`,
    description:
      "Senior Software Engineer based in Amsterdam, Netherlands — Videoland / DPG Media.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var dark=t!=='light';var root=document.documentElement;if(dark){root.classList.add('dark');root.classList.remove('light');root.style.colorScheme='dark';}else{root.classList.remove('dark');root.classList.add('light');root.style.colorScheme='light';}var href=(dark?'/favicon-dark.svg':'/favicon-light.svg')+'?v='+(dark?'dark':'light');document.querySelectorAll("link[rel='icon'],link[rel='shortcut icon']").forEach(function(n){n.remove();});var link=document.createElement('link');link.id='theme-favicon';link.rel='icon';link.type='image/svg+xml';link.setAttribute('sizes','any');link.href=href;document.head.appendChild(link);}catch(e){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} dark h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
