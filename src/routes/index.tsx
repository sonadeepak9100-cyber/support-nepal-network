import { createFileRoute } from "@tanstack/react-router";

import heroCampus from "@/assets/hero-campus.jpg";
import leaderFounder from "@/assets/leader-founder.jpg";
import leaderOperations from "@/assets/leader-operations.jpg";
import leaderBusiness from "@/assets/leader-business.jpg";

const TITLE = "IEC Group — Nepal's Legacy of Education Since 1997";
const DESCRIPTION =
  "IEC Group is Nepal's education house: twelve institutions across fashion, design, analytics, K-12 and early years, guided since 1997 by Ms. Shailaja Adhikary.";

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

const stats = [
  { value: "28", suffix: "+", label: "Years of legacy" },
  { value: "12", suffix: "+", label: "Institutions" },
  { value: "50K", suffix: "+", label: "Students shaped" },
  { value: "500", suffix: "+", label: "Faculty & staff" },
];

const leaders = [
  {
    name: "Ms. Shailaja Adhikary",
    role: "Founder & Managing Director",
    note: "Founded IEC in 1997 and remains the guiding hand behind twelve institutions across the valley.",
    image: leaderFounder,
  },
  {
    name: "Manish Kumar Deepak",
    role: "Director, Operations",
    note: "An engineer by training, he has held the group's operating standards since its very first year.",
    image: leaderOperations,
  },
  {
    name: "Sona Deepak",
    role: "Business Director",
    note: "Bridges craft and technology, steering the group's next chapter toward global standards.",
    image: leaderBusiness,
  },
];

const institutions = [
  {
    name: "IEC College of Art & Fashion",
    discipline: "Fashion & Interior Design",
    locations: "Mandikatar",
    href: "https://ieccollege.com.np/",
  },
  {
    name: "IEC School of Analytics",
    discipline: "Data Science & Analytics",
    locations: "Mandikatar",
    href: "https://iecschoolofanalytics.com/",
  },
  {
    name: "IEC School of Art & Fashion",
    discipline: "Creative Arts",
    locations: "Dillibazar",
    href: "https://iecsaf.com/",
  },
  {
    name: "Euro Kids",
    discipline: "Pre-Primary",
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
  {
    name: "Sana School of Design",
    discipline: "Design",
    locations: "Kathmandu",
    href: null,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Ethos />
      <Stats />
      <Leadership />
      <Institutions />
      <Contact />
      <Footer />
    </div>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-sm font-semibold tracking-[0.34em] ${className}`}
    >
      IEC <span className="text-gold">GROUP</span>
    </span>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-10 font-body text-[13px] tracking-wide text-muted-foreground md:flex">
          <a href="#ethos" className="transition-colors hover:text-gold">
            Ethos
          </a>
          <a href="#leadership" className="transition-colors hover:text-gold">
            Leadership
          </a>
          <a href="#institutions" className="transition-colors hover:text-gold">
            Institutions
          </a>
        </nav>
        <a
          href="#contact"
          className="font-display text-[12px] tracking-[0.18em] uppercase text-gold underline-offset-8 transition-colors hover:text-gold-soft hover:underline"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden">
      <img
        src={heroCampus}
        alt="Golden dusk light across a modern university atrium"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <div className="veil absolute inset-0" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-6 pb-24 pt-40 lg:px-8 lg:pb-32">
        <p className="eyebrow rise">Kathmandu · Established 1997</p>
        <div className="hairline rule-in mt-8 max-w-[7rem]" />
        <h1
          className="rise mt-10 max-w-[16ch] font-display text-[3.1rem] font-semibold leading-[0.98] tracking-[-0.03em] text-balance sm:text-7xl lg:text-[5.75rem]"
          style={{ animationDelay: "100ms" }}
        >
          Education, <span className="text-gilt">refined</span> over
          twenty-eight years.
        </h1>
        <p
          className="rise mt-9 max-w-[48ch] font-body text-lg leading-relaxed text-muted-foreground text-pretty"
          style={{ animationDelay: "200ms" }}
        >
          A house of twelve institutions in Nepal — fashion ateliers, analytics
          labs, design studios and schools — held to a single, uncompromising
          standard.
        </p>
        <div
          className="rise mt-12 flex items-center gap-8"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#institutions"
            className="group inline-flex items-center gap-3 border border-gold/50 px-8 py-4 font-display text-[13px] tracking-[0.16em] uppercase text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground"
          >
            View the house
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Ethos() {
  return (
    <section id="ethos" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="eyebrow">Our ethos</p>
          </div>
          <div className="lg:col-span-8">
            <p className="font-display text-2xl leading-[1.35] tracking-[-0.015em] text-balance sm:text-3xl lg:text-[2.4rem]">
              We were founded on the belief that education is not a service to
              be sold, but a{" "}
              <span className="text-gold">craft to be practised</span> — slowly,
              attentively, and for a lifetime.
            </p>
            <p className="mt-10 max-w-[58ch] font-body leading-relaxed text-muted-foreground text-pretty">
              From a single fashion college in 1997, IEC Group has grown into
              one of Nepal's most quietly consequential education houses. Each
              institution keeps its own character and faculty; all of them share
              the same insistence on rigour, taste, and care for the student in
              the room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-14 px-6 py-20 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={
              i < stats.length - 1
                ? "lg:border-r lg:border-border lg:pr-8"
                : undefined
            }
          >
            <div className="font-display text-5xl font-semibold tracking-[-0.03em] lg:text-6xl">
              <span className="text-gilt">{stat.value}</span>
              <span className="text-gold/50">{stat.suffix}</span>
            </div>
            <p className="mt-4 font-body text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="flex items-end justify-between gap-8 border-b border-border pb-8">
          <h2 className="max-w-[18ch] font-display text-4xl font-semibold tracking-[-0.03em] text-balance lg:text-5xl">
            The stewards of the house
          </h2>
          <span className="eyebrow hidden shrink-0 sm:block">Leadership</span>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {leaders.map((leader) => (
            <article key={leader.name} className="group">
              <div className="overflow-hidden bg-card">
                <img
                  src={leader.image}
                  alt={`Portrait of ${leader.name}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-7 font-display text-xl font-medium tracking-[-0.01em]">
                {leader.name}
              </h3>
              <p className="mt-2 font-body text-[11px] uppercase tracking-[0.22em] text-gold">
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

function Institutions() {
  return (
    <section id="institutions" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="flex items-end justify-between gap-8 border-b border-border pb-8">
          <h2 className="max-w-[18ch] font-display text-4xl font-semibold tracking-[-0.03em] text-balance lg:text-5xl">
            Eight institutions, one standard
          </h2>
          <span className="eyebrow hidden shrink-0 sm:block">01 — 08</span>
        </div>

        <div className="mt-4">
          {institutions.map((inst, i) => {
            const index = String(i + 1).padStart(2, "0");
            const inner = (
              <>
                <span className="w-10 shrink-0 font-display text-sm text-gold/60">
                  {index}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl font-medium tracking-[-0.015em] transition-colors duration-500 group-hover:text-gold lg:text-2xl">
                    {inst.name}
                  </span>
                  <span className="mt-2 block font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {inst.discipline} · {inst.locations}
                  </span>
                </span>
              </>
            );

            if (!inst.href) {
              return (
                <div
                  key={inst.name}
                  className="flex items-center gap-6 border-b border-border py-8 opacity-55"
                >
                  {inner}
                  <span className="shrink-0 border border-gold/40 px-3 py-1.5 font-body text-[10px] uppercase tracking-[0.2em] text-gold">
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
                className="group flex items-center gap-6 border-b border-border py-8 transition-colors duration-500 hover:border-gold/40"
              >
                {inner}
                <span className="hidden shrink-0 font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-500 group-hover:text-gold sm:block">
                  Visit
                </span>
                <span className="shrink-0 text-lg text-gold/60 transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            );
          })}
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
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">Correspondence</p>
            <h2 className="mt-7 max-w-[14ch] font-display text-4xl font-semibold tracking-[-0.03em] text-balance lg:text-6xl">
              Begin a <span className="text-gilt">conversation</span>
            </h2>
            <p className="mt-8 max-w-[42ch] font-body leading-relaxed text-muted-foreground text-pretty">
              Admissions, partnerships, or a visit to one of our campuses — the
              group office in Kathmandu will see to it personally.
            </p>
          </div>

          <dl className="grid gap-10 sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.label}>
                <dt className="font-body text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                  {d.label}
                </dt>
                <dd className="mt-3 font-display text-lg tracking-[-0.01em]">
                  {d.href ? (
                    <a
                      href={d.href}
                      className="transition-colors duration-500 hover:text-gold"
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
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center lg:px-8">
        <Wordmark />
        <p className="font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          © 1997–2026 IEC Group Nepal
        </p>
      </div>
    </footer>
  );
}
