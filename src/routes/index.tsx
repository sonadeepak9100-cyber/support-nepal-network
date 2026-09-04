import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import heroCampus from "@/assets/hero-campus.jpg";
import iecLogo from "@/assets/iec-logo.jpg.asset.json";

import leaderManish from "@/assets/leader-manish.jpg.asset.json";
import leaderSona from "@/assets/leader-sona.jpg.asset.json";
import leaderSonaDeepak from "@/assets/leader-sona-deepak.jpg.asset.json";

const TITLE = "IEC Group — Nepal's Legacy of Education Since 1997";
const DESCRIPTION =
  "IEC Group is Nepal's education house: institutions across fashion, design, K-12 and early years, guided since 1997 by Ms. Shailaja Adhikary.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const institutions = [
  {
    name: "IEC College of Art & Fashion",
    discipline: "Fashion & Interior Design",
    locations: "Mandikatar",
    href: "https://ieccollege.com.np/",
  },
  {
    name: "IEC School of Design & IT",
    discipline: "Design, Creative Arts & IT",
    locations: "Mandikhatar · Miteripul",
    href: "https://iecsaf.com/",
  },
  {
    name: "EuroKids Early Childhood Education",
    discipline: "Early Years",
    locations: "Hattigauda · Samakhusi · Bishalnagar · Tinkune",
    href: "https://eurokids.com.np/",
  },
  {
    name: "Euro School Kathmandu",
    discipline: "K–12",
    locations: "Hattigauda",
    href: "https://euroschool.edu.np/",
  },
  {
    name: "Metaphor Consultancy",
    discipline: "Career & Admissions",
    locations: "Mandikatar",
    href: "https://metaphorconsultancy.com/",
  },
  {
    name: "IEC Tech",
    discipline: "Technology & Digital Skills",
    locations: "Mandikatar",
    href: null,
  },
];

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  {
    label: "Leadership",
    href: "#leadership",
    children: [
      {
        label: "Ms. Shailaja Adhikary",
        href: "#leadership",
        note: "Founder & Managing Director",
      },
      {
        label: "Manish Kumar Deepak",
        href: "#leadership",
        note: "Director, Operations",
      },
      {
        label: "Sona Deepak",
        href: "#leadership",
        note: "Business Director",
      },
    ],
  },
  {
    label: "Organizations",
    href: "#institutions",
    children: institutions.map((i) => ({
      label: i.name,
      href: i.href ?? "#institutions",
      note: i.discipline,
    })),
  },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "28", unit: "Years", note: "Of unbroken academic legacy since 1997" },
  { value: "06", unit: "Institutions", note: "Colleges, schools and studios" },
  { value: "50K", unit: "Alumni", note: "Careers shaped across Nepal" },
  { value: "500", unit: "Faculty", note: "Educators, mentors and staff" },
];

const leaders = [
  {
    name: "Ms. Shailaja Adhikary",
    role: "Founder & Managing Director",
    note: "Founded IEC in 1997 and remains the guiding hand behind the group's institutions across the valley.",
    image: leaderSona.url,
  },
  {
    name: "Manish Kumar Deepak",
    role: "Director, Operations",
    note: "An engineer by training, he has held the group's operating standards since its very first year.",
    image: leaderManish.url,
  },
  {
    name: "Sona Deepak",
    role: "Business Director",
    note: "Bridges craft and technology, steering the group's next chapter toward global standards.",
    image: leaderSonaDeepak.url,
  },
];


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Institutions />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Wordmark({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <img
      src={iecLogo.url}
      alt="IEC Group of Companies"
      width={320}
      height={160}
      className={`h-14 w-auto object-contain lg:h-16 ${invert ? "rounded-md bg-paper p-1.5" : ""} ${className}`}
    />
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-background/95 text-foreground backdrop-blur-xl transition-shadow duration-500 ${
        scrolled || open ? "border-border shadow-[var(--shadow-lift)]" : "border-border/60"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <Wordmark />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 font-body text-[13px] font-medium md:flex lg:gap-10">

          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <a
                  href={link.href}
                  className="relative flex items-center gap-1.5 py-1 transition-opacity duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brandred after:transition-transform after:duration-500 group-hover:after:scale-x-100"
                >
                  {link.label}
                  <span className="text-[9px] leading-none opacity-70">▼</span>
                </a>
                <div className="invisible absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="border border-border bg-background p-2 shadow-2xl">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        target={child.href.startsWith("http") ? "_blank" : undefined}
                        rel={child.href.startsWith("http") ? "noreferrer" : undefined}
                        className="block border-b border-border/60 px-4 py-3 last:border-0 hover:bg-secondary/70"
                      >
                        <span className="block font-display text-[13px] normal-case tracking-normal text-foreground">
                          {child.label}
                        </span>
                        <span className="mt-0.5 block font-body text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {child.note}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 transition-opacity duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brandred after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>


        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-full bg-brandred px-7 py-3 font-body text-[13px] font-semibold text-paper shadow-[var(--shadow-lift)] transition-colors duration-300 hover:bg-primary sm:inline-block"
          >

            Get in Touch
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-6 pb-8 pt-4 md:hidden">
          {navLinks.map((link) => (
            <div key={link.href} className="border-b border-border py-4">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-display text-xl text-foreground"
              >
                {link.label}
              </a>
              {link.children ? (
                <div className="mt-3 space-y-2 border-l border-border pl-4">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      target={child.href.startsWith("http") ? "_blank" : undefined}
                      rel={child.href.startsWith("http") ? "noreferrer" : undefined}
                      onClick={() => setOpen(false)}
                      className="block font-body text-sm text-muted-foreground"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 block bg-primary px-6 py-4 text-center font-body text-[11px] uppercase tracking-[0.14em] text-primary-foreground"
          >
            Get in Touch
          </a>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[92vh] overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(255,255,255,0.16),transparent_65%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/25 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 py-40 text-center text-paper lg:px-10">
        <p className="rise font-body text-[11px] uppercase tracking-[0.32em] text-red-soft">
          Education… Our Passion
        </p>
        <h1
          className="rise mt-8 font-display text-[4.25rem] font-bold uppercase leading-[0.92] tracking-[-0.02em] sm:text-[7rem] lg:text-[10rem]"
          style={{ animationDelay: "100ms" }}
        >
          IEC Group
        </h1>
        <p
          className="rise mt-8 max-w-[54ch] font-body text-lg leading-relaxed text-paper/80 text-pretty"
          style={{ animationDelay: "200ms" }}
        >
          Established in 1997 in Kathmandu — a house of institutions across
          design, technology, K-12 and early years, held to a single,
          uncompromising standard.
        </p>
        <div
          className="rise mt-12 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#institutions"
            className="bg-paper px-8 py-4 font-body text-[11px] uppercase tracking-[0.14em] text-ink transition-colors duration-500 hover:bg-brandred hover:text-paper"
          >
            Our organizations
          </a>
          <a
            href="#about"
            className="border border-paper/50 px-8 py-4 font-body text-[11px] uppercase tracking-[0.14em] text-paper transition-colors duration-500 hover:bg-paper/10"
          >
            About us
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-6 max-w-[16ch] font-display text-4xl leading-[1.1] tracking-[-0.01em] text-balance lg:text-[3.25rem]">
              A legendary welcome, every time
            </h2>
            <p className="mt-8 max-w-[52ch] font-body leading-relaxed text-muted-foreground text-pretty">
              Founded in 1997 with a single fashion college, IEC Group has grown
              into one of Nepal's most quietly consequential education houses.
              Each institution keeps its own character and faculty; all of them
              share the same insistence on rigour, taste, and care for the
              student in the room.
            </p>
            <p className="mt-6 max-w-[52ch] font-body leading-relaxed text-muted-foreground text-pretty">
              From early years classrooms to design studios, we build places
              where curiosity is treated as craft — practised slowly,
              attentively, and for a lifetime.

            </p>
            <a
              href="#contact"
              className="mt-10 inline-block bg-primary px-8 py-4 font-body text-[11px] uppercase tracking-[0.14em] text-primary-foreground transition-colors duration-500 hover:bg-ink-soft"
            >
              About us
            </a>
          </div>

          <div className="relative">
            <img
              src={heroCampus}
              alt="Students at an IEC Group campus"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute -bottom-8 -left-8 hidden bg-card p-8 shadow-[var(--shadow-lift)] lg:block">
              <p className="font-display text-4xl">1997</p>
              <p className="mt-2 font-body text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                The first campus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:pb-36">
        {stats.map((stat) => (
          <div key={stat.unit} className="border border-border bg-card p-8">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl tracking-[-0.02em]">
                {stat.value}
              </span>
              <span className="font-body text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {stat.unit}
              </span>
            </div>
            <p className="mt-8 font-body text-sm leading-relaxed text-muted-foreground">
              {stat.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Institutions() {
  return (
    <section id="institutions" className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="max-w-[36ch]">
          <p className="eyebrow">The house</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.1] tracking-[-0.01em] text-balance lg:text-[3.25rem]">
            Six institutions, one standard
          </h2>
        </div>

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {institutions.map((inst, i) => {
            const index = String(i + 1).padStart(2, "0");
            const body = (
              <>
                <span className="font-body text-[11px] tracking-[0.24em] text-brandred">
                  {index}
                </span>
                <span className="mt-6 block font-display text-2xl leading-snug tracking-[-0.01em]">
                  {inst.name}
                </span>
                <span className="mt-4 block font-body text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {inst.discipline}
                </span>
                <span className="mt-2 block font-body text-sm text-muted-foreground">
                  {inst.locations}
                </span>
              </>
            );

            if (!inst.href) {
              return (
                <div
                  key={inst.name}
                  className="flex min-h-[19rem] flex-col bg-card p-8"
                >
                  {body}
                  <span className="mt-auto pt-8 font-body text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Coming soon
                  </span>
                </div>
              );
            }

            return (
              <a
                key={inst.name}
                href={inst.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[19rem] flex-col bg-card p-8 transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
              >
                {body}
                <span className="mt-auto flex items-center gap-3 pt-8 font-body text-[10px] uppercase tracking-[0.14em] text-brandred">
                  Visit
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="max-w-[34ch]">
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.1] tracking-[-0.01em] text-balance lg:text-[3.25rem]">
            The stewards of the house
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {leaders.map((leader) => (
            <article key={leader.name} className="group">
              <div className="overflow-hidden bg-secondary">
                <img
                  src={leader.image}
                  alt={`Portrait of ${leader.name}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-7 font-display text-2xl tracking-[-0.01em]">
                {leader.name}
              </h3>
              <p className="mt-2 font-body text-[11px] uppercase tracking-[0.2em] text-brandred">
                {leader.role}
              </p>
              <p className="mt-5 font-body text-sm leading-relaxed text-muted-foreground text-pretty">
                {leader.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const details = [
    { label: "Telephone", value: "9860540054", href: "tel:9860540054" },
    {
      label: "Email",
      value: "info@iecgroupnepal.com",
      href: "mailto:info@iecgroupnepal.com",
    },
    { label: "Hours", value: "Sunday – Friday · 9am – 5pm", href: null },
    { label: "Location", value: "Kathmandu, Nepal", href: null },
  ];

  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.24em] text-red-soft">
              Correspondence
            </p>
            <h2 className="mt-6 max-w-[14ch] font-display text-4xl leading-[1.1] text-balance lg:text-[3.25rem]">
              Begin a conversation
            </h2>
            <p className="mt-8 max-w-[44ch] font-body leading-relaxed text-paper/75 text-pretty">
              Admissions, partnerships, or a visit to one of our campuses — the
              group office in Kathmandu will see to it personally.
            </p>
          </div>

          <dl className="grid gap-10 sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.label} className="border-t border-paper/20 pt-6">
                <dt className="font-body text-[10px] uppercase tracking-[0.26em] text-paper/60">
                  {d.label}
                </dt>
                <dd className="mt-3 font-display text-xl">
                  {d.href ? (
                    <a
                      href={d.href}
                      className="transition-colors duration-500 hover:text-red-soft"
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center lg:px-10">
        <Wordmark />
        <p className="font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          © 1997–2026 IEC Group Nepal
        </p>
      </div>
    </footer>
  );
}
