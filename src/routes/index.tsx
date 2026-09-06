import { useEffect, useMemo, useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Compass,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Users,
  Sparkles,
  Quote,
} from "lucide-react";

import aboutCampusAsset from "@/assets/about-campus-bright.jpg.asset.json";
import aboutStudio from "@/assets/about-design-studio.jpg.asset.json";
import aboutEarlyYears from "@/assets/about-early-years.jpg.asset.json";
import convocationAward from "@/assets/convocation-award.jpg.asset.json";
import convocationProcession from "@/assets/convocation-procession.jpg.asset.json";
import logoIecCollege from "@/assets/logo-iec-college.jpg.asset.json";
import logoIecDesignIt from "@/assets/logo-iec-design-it.jpg.asset.json";
import logoEuroKids from "@/assets/logo-eurokids.jpg.asset.json";
import logoEuroSchool from "@/assets/logo-euro-school.jpg.asset.json";
import euroAnnualDay from "@/assets/euro-investiture.jpg.asset.json";
import groupFestival from "@/assets/group-festival.jpg.asset.json";


import groupLab from "@/assets/group-lab.jpg.asset.json";
import groupRunway from "@/assets/group-runway.jpg.asset.json";
import studioGreenscreen from "@/assets/studio-greenscreen.jpg.asset.json";
import studioPodcast from "@/assets/studio-podcast.jpg.asset.json";
import studioAudio from "@/assets/studio-audio.jpg.asset.json";
import infraIecCollege from "@/assets/infra-iec-college.jpg.asset.json";
import infraDesignIt from "@/assets/infra-design-it.jpg.asset.json";
import infraEuroSchool from "@/assets/infra-euro-school.jpg.asset.json";
import infraEurokidsHattigauda from "@/assets/infra-eurokids-hattigauda.jpg.asset.json";
import infraEurokidsBlock from "@/assets/infra-eurokids-block.jpg.asset.json";
import infraEurokidsSamakhusi from "@/assets/infra-eurokids-samakhusi.jpg.asset.json";
import infraAuditorium from "@/assets/infra-auditorium.jpg.asset.json";
import infraCafeteria from "@/assets/infra-cafeteria.jpg.asset.json";
import infraEuroKoteshwor from "@/assets/infra-euroschool-koteshwor.jpg.asset.json";
import logoEuroKoteshwor from "@/assets/euroschool-koteshwor-logo.jpg.asset.json";
import heroUnity from "@/assets/hero-unity.jpg.asset.json";

import heroCampus from "@/assets/hero-eurokids.jpg.asset.json";
import iecLogo from "@/assets/iec-logo.jpg.asset.json";
import leaderManish from "@/assets/leader-manish.jpg.asset.json";
import leaderSona from "@/assets/leader-sona.jpg.asset.json";
import leaderSonaDeepak from "@/assets/leader-sona-deepak.jpg.asset.json";

import { leaders } from "@/lib/leaders";
import { NepalMap } from "@/components/nepal-map";
import { useActiveSection, useCountUp, useReveal } from "@/lib/use-reveal";

const TITLE = "IEC Group — Nepal's Legacy of Education Since 1997";
const DESCRIPTION =
  "IEC Group is Nepal's education house: 10+ institutions and campuses in design, IT, K-12 and early years, led since 1997 by Ms. Shailaja Adhikary.";

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

/* ---------------------------------------------------------------- data --- */

type Institution = {
  name: string;
  logo?: string;
  discipline: string;
  category: string;
  locations: string;
  blurb: string;
  href: string | null;
  highlight?: string;
  branches?: { name: string; status?: string }[];
};

const institutions: Institution[] = [
  {
    name: "IEC College of Art & Fashion",
    logo: logoIecCollege.url,
    discipline: "Fashion & Interior Design",
    category: "Education",
    locations: "Mandikatar",
    blurb:
      "Nepal's founding fashion and interior design college — studio-led teaching, national runway showcases and industry placements. Its degree programmes are delivered in academic partnership with Teesside University, UK, so students earn a British qualification while studying in Kathmandu, with the option to progress on to the university's campus.",
    href: "https://ieccollege.com.np/",
    highlight: "In academic partnership with Teesside University, UK",
  },
  {
    name: "IEC School of Design & IT",
    logo: logoIecDesignIt.url,
    discipline: "Design, Creative Arts & IT",
    category: "Technology",
    locations: "Mandikhatar · Miteripul",
    blurb:
      "Creative arts meets computing: graphic design, UI, animation and applied IT programmes built around real client briefs.",
    href: "https://iecsaf.com/",
  },
  {
    name: "EuroKids",
    logo: logoEuroKids.url,
    discipline: "Pre-School",
    category: "Early Years",
    locations: "Hattigauda · Bishalnagar · Tinkune · Samakhushi",
    blurb:
      "Play-based pre-school learning delivered to an international curriculum standard, with four Kathmandu branches running the same programme so families never lose continuity.",
    href: "https://eurokids.com.np/",
    branches: [
      { name: "Hattigauda" },
      { name: "Bishalnagar" },
      { name: "Tinkune" },
      { name: "Samakhushi" },
    ],
  },
  {
    name: "EuroKids Early Childhood Education",
    logo: logoEuroKids.url,
    discipline: "Early Childhood Education",
    category: "Early Years",
    locations: "Sitapaila",
    blurb:
      "A separate early childhood education centre opening in Sitapaila, extending the group's early years work with a dedicated, purpose-built campus.",
    href: null,
    highlight: "Coming soon",
  },

  {
    name: "Euro School Kathmandu",
    logo: logoEuroSchool.url,
    discipline: "IB World School · Grade 1–10",
    category: "K-12",
    locations: "Hattigauda",
    blurb:
      "An IB World School running Grade 1 to Grade 10 — inquiry-led learning and globally benchmarked assessment, with room for music, sport and design alongside academics.",
    href: "https://euroschool.edu.np/",
    highlight: "IB World School · Grade 1–10",
  },
  {
    name: "Euro School Suryakot, Koteshwor",
    logo: logoEuroKoteshwor.url,
    discipline: "School · Learning Unlike Any Other",
    category: "K-12",
    locations: "Suryakot · Koteshwor",
    blurb:
      "The Koteshwor campus of Euro School — a full school setting with open play areas, activity courts and modern classrooms serving families across east Kathmandu.",
    highlight: "Koteshwor campus",
  },
  {
    name: "Euro A Level Academy",
    logo: logoEuroSchool.url,
    discipline: "+2 / A Levels",
    category: "K-12",
    locations: "Kathmandu",
    blurb:
      "The group's +2 stage: a dedicated A Level academy carrying Euro School students — and students from other schools — through to university entry in Nepal and abroad.",
    href: null,
    highlight: "Coming soon",
  },



  {
    name: "Metaphor Consultancy",
    discipline: "Career & Admissions",
    category: "Consultancy",
    locations: "Mandikatar",
    blurb:
      "Admissions counselling, test preparation and university placement for students heading abroad and at home.",
    href: "https://metaphorconsultancy.com/",
  },
];

const categories = ["All", "Education", "K-12", "Early Years", "Technology", "Consultancy"];

const navLinks = [
  { id: "top", label: "Home", href: "#top" },
  { id: "about", label: "About Us", href: "#about" },
  {
    id: "leadership",
    label: "Leadership",
    href: "#leadership",
    children: [
      { label: "Ms. Shailaja Adhikary", href: "/leadership/shailaja-adhikary", note: "Founder & Managing Director" },
      { label: "Manish Kumar Deepak", href: "/leadership/manish-kumar-deepak", note: "Director, Operations" },
      { label: "Sona Deepak", href: "/leadership/sona-deepak", note: "Business Director" },
    ],
  },
  {
    id: "institutions",
    label: "Organizations",
    href: "#institutions",
    children: institutions.map((i) => ({
      label: i.name,
      href: i.href ?? "#institutions",
      note: i.discipline,
    })),
  },
  { id: "contact", label: "Contact", href: "#contact" },
];

const stats = [
  { target: 28, suffix: "+", label: "Years of excellence", icon: Award },
  { target: 10, suffix: "+", label: "Institutions", icon: Building2 },
  { target: 50, suffix: "K+", label: "Students empowered", icon: Users },
  { target: 500, suffix: "+", label: "Faculty & staff", icon: GraduationCap },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Education & Skills",
    body: "From early years to degree-level design and IT, each institution runs its own faculty against one group standard.",
  },
  {
    icon: Compass,
    title: "Careers & Guidance",
    body: "Counselling, portfolio reviews and placements that turn a qualification into a working career in Nepal or abroad.",
  },
  {
    icon: HeartHandshake,
    title: "Community Development",
    body: "Scholarships, school partnerships and outreach camps that carry the group's teaching beyond Kathmandu.",
  },
  {
    icon: Sparkles,
    title: "Industry & Innovation",
    body: "Live client briefs, runway shows and technology labs keep our classrooms tied to the work students will actually do.",
  },
];

const timeline = [
  {
    year: "1997",
    title: "Founded in Kathmandu",
    body: "IEC opens with a single fashion and interior design college under Ms. Shailaja Adhikary.",
  },
  {
    year: "2007",
    title: "EuroKids comes to Nepal",
    body: "EuroKids is launched in Nepal, bringing structured play-based early years learning to Kathmandu families.",
  },
  {
    year: "2008",
    title: "Euro School opens",
    body: "Euro School Kathmandu is launched, taking the group into formal schooling from Grade 1 upward.",
  },
  {
    year: "2009",
    title: "IEC College is launched",
    body: "IEC College begins degree-level study in art, fashion and design, later in academic partnership with Teesside University, UK.",
  },
  {
    year: "2024",
    title: "Into IT — and abroad",
    body: "IEC enters the IT field with short, job-focused technology courses, and launches Metaphor Abroad Consultancy to guide students to further studies overseas.",
  },
  {

    year: "Today",
    title: "10+ institutions and campuses",
    body: "More than ten institutions and campuses across early years, K-12, design, IT and consultancy, with 500+ faculty and a 50,000-strong alumni network.",
  },
];


const stories = [
  {
    tag: "Design graduates",
    title: "From studio brief to national runway",
    body: "Final-year fashion students take live client briefs and close the year showing collections in front of Nepal's design industry — a portfolio that hires them before graduation.",
    stat: "82%",
    statNote: "of design graduates placed within a year",
  },
  {
    tag: "Early years",
    title: "Four neighbourhoods, one standard of care",
    body: "EuroKids classrooms in Hattigauda, Samakhusi, Bishalnagar and Tinkune run the same play-based curriculum, so a family moving across the city never loses continuity.",
    stat: "4",
    statNote: "early years campuses in Kathmandu",
  },
];

const testimonials = [
  {
    quote:
      "The studio culture here is unlike anywhere else in Kathmandu. I left with a portfolio, not just a certificate.",
    name: "Fashion Design alumna",
    role: "Class of 2019 · Kathmandu",
  },
  {
    quote:
      "Both our children have gone through EuroKids and then Euro School. The care has been consistent for a decade.",
    name: "Parent, Euro School Kathmandu",
    role: "Hattigauda",
  },
  {
    quote:
      "We hire from IEC every year. Their design and IT graduates arrive ready for client work from week one.",
    name: "Creative studio partner",
    role: "Industry recruiter",
  },
  {
    quote:
      "The IB programme at Euro School gave my daughter the confidence to question, research and present like a university student.",
    name: "Parent, Euro School",
    role: "IB Grade 10 · Kathmandu",
  },
  {
    quote:
      "Short IT courses here are practical from day one. I built real projects and moved into a junior developer role within months.",
    name: "IT course graduate",
    role: "IEC School of Design & IT",
  },
  {
    quote:
      "As a teacher, the training and freedom I get to design my own classroom activities is what keeps me here.",
    name: "Early years educator",
    role: "EuroKids Bishalnagar",
  },
  {
    quote:
      "The Teesside University pathway made studying abroad realistic for our family — clear steps, honest counselling, no surprises.",
    name: "Parent of a college student",
    role: "IEC College · Kathmandu",
  },
  {
    quote:
      "Convocation day showed the scale of this group. Hundreds of graduates, and every one of them named on stage.",
    name: "Guest at convocation",
    role: "Community member",
  },
];

/* ------------------------------------------------------------- helpers --- */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-balance lg:text-[3.1rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 font-body leading-relaxed text-muted-foreground text-pretty">{intro}</p>
      ) : null}
    </Reveal>
  );
}

/* ---------------------------------------------------------------- page --- */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Pillars />
        <Institutions />
        <MapSection />
        <Impact />
        <Timeline />
        <Leadership />
        <Partners />
        <Testimonials />
        <Gallery />
        <StudioSection />
        <InfrastructureSection />


        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      src={iecLogo.url}
      alt="IEC Group of Companies"
      width={320}
      height={160}
      className={`h-20 w-auto object-contain lg:h-24 ${className}`}
    />
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => navLinks.map((l) => l.id), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || open
          ? "border-border bg-paper/85 shadow-[var(--shadow-lift)] backdrop-blur-xl"
          : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 font-body text-[15px] font-medium text-foreground md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return link.children ? (
              <div key={link.id} className="group relative">
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative flex items-center gap-1.5 py-1 transition-colors duration-300 hover:text-brandred ${
                    isActive ? "text-brandred" : ""
                  }`}
                >
                  {link.label}
                  <span className="text-[9px] leading-none opacity-70">▼</span>
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-brandred transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
                <div className="invisible absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-border bg-paper/95 p-2 shadow-[var(--shadow-lift)] backdrop-blur-xl">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        target={child.href.startsWith("http") ? "_blank" : undefined}
                        rel={child.href.startsWith("http") ? "noreferrer" : undefined}
                        className="block rounded-xl px-4 py-3 transition-colors duration-300 hover:bg-secondary"
                      >
                        <span className="block font-display text-[13px] text-foreground">
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
                key={link.id}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative py-1 transition-colors duration-300 hover:text-brandred ${
                  isActive ? "text-brandred" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-brandred transition-transform duration-500 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl bg-brandgold px-6 py-2.5 font-body text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brandred hover:text-paper hover:shadow-[var(--shadow-lift)] sm:inline-flex"
          >
            Get Involved
            <ArrowRight className="size-4" />
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
        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-paper px-6 pb-8 pt-2 md:hidden">
          {navLinks.map((link) => (
            <div key={link.id} className="border-b border-border py-4">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-display text-lg text-foreground"
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
            className="mt-6 block rounded-xl bg-brandgold px-6 py-4 text-center font-body text-sm font-semibold text-ink"
          >
            Get Involved
          </a>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[92vh] overflow-hidden bg-primary">
      <img
        src={heroCampus.url}
        alt="Students walking through an IEC Group campus courtyard at golden hour"
        className="absolute inset-0 size-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(150deg,color-mix(in_oklab,var(--veil-base)_92%,transparent),color-mix(in_oklab,var(--veil-base)_62%,transparent))]" />
      <div className="absolute inset-x-0 bottom-0 h-56 veil" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 py-32 text-center text-paper lg:px-10">
        <img
          src={iecLogo.url}
          alt="IEC Group of Companies"
          className="rise h-[100px] w-auto rounded-xl bg-paper object-contain px-3 py-1 shadow-2xl sm:h-[120px] lg:h-[140px]"
        />
        <h1
          className="rise mt-8 font-display text-[2.4rem] font-bold uppercase leading-[1] tracking-[-0.03em] sm:text-[3.6rem] lg:text-[4.75rem]"
          style={{ animationDelay: "100ms" }}
        >
          IEC Group
        </h1>
        <p
          className="rise mt-6 inline-flex items-center gap-2 rounded-full border border-paper/25 bg-paper/10 px-4 py-1.5 font-body text-[11px] uppercase tracking-[0.28em] text-paper/90 backdrop-blur-sm"
          style={{ animationDelay: "160ms" }}
        >
          <span className="size-1.5 rounded-full bg-brandgold" />
          Education… Our Passion
        </p>
        <p
          className="rise mt-8 max-w-[58ch] font-body text-lg leading-relaxed text-paper/85 text-pretty"
          style={{ animationDelay: "200ms" }}
        >
          Since 1997, IEC Group has built a network of more than ten institutions and campuses across design, IT, K-10,
          early years and bachelor degrees — held to a single, uncompromising standard of teaching and care.
        </p>

        <div
          className="rise mt-12 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#institutions"
            className="group inline-flex items-center gap-2 rounded-xl bg-brandgold px-8 py-4 font-body text-sm font-semibold text-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-paper"
          >
            Explore our network
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-paper/40 bg-paper/5 px-8 py-4 font-body text-sm font-semibold text-paper backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:bg-paper/15"
          >
            Get involved
          </a>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const { ref, visible } = useReveal(0.4);
  const value = useCountUp(stat.target, visible);
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      data-visible={visible}
      className="reveal card-lift rounded-2xl border border-border bg-card p-8"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <Icon className="size-6 text-brandred" strokeWidth={1.5} />
      <div className="mt-8 font-display text-5xl font-semibold tracking-[-0.03em]">
        {value}
        {stat.suffix}
      </div>
      <p className="mt-3 font-body text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
}

function Stats() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto -mt-20 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}

const aboutFacts = [
  { value: "1997", label: "Founded in Bagbazar, Kathmandu" },
  { value: "10+", label: "Institutions & campuses" },
  { value: "500+", label: "Faculty and staff" },
  { value: "50,000+", label: "Alumni across Nepal & abroad" },
];

const aboutValues = [
  {
    title: "Learning that lasts",
    body: "From play-based early years rooms to degree studios, every stage is designed to build on the one before it — a child can grow up inside the group without ever losing continuity.",
  },
  {
    title: "Taught by practitioners",
    body: "Designers, engineers, IB-trained educators and industry mentors teach here, so what happens in class stays close to what happens in the profession.",
  },
  {
    title: "Recognised beyond Nepal",
    body: "An IB World School, degree programmes with Teesside University in the UK, and a consultancy that places students on campuses across the world.",
  },
];

function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="An education house, not a chain"
              intro="Founded in 1997 with a single fashion college, IEC Group has grown into one of Nepal's most quietly consequential education houses. Each institution keeps its own character and faculty; all of them share the same insistence on rigour, taste and care for the student in the room."
            />
            <Reveal delay={120}>
              <p className="mt-6 max-w-[52ch] font-body leading-relaxed text-muted-foreground text-pretty">
                What began as a small studio in Bagbazar now spans early childhood centres, an IB
                World School, a design and IT college, an A Levels academy and an overseas study
                consultancy — more than ten institutions, taught by over 500 faculty, with an alumni
                network of some fifty thousand across Nepal and abroad.
              </p>
              <p className="mt-4 max-w-[52ch] font-body leading-relaxed text-muted-foreground text-pretty">
                We stay deliberately close to the ground: small cohorts, teachers who practise what
                they teach, and campuses run to one standard whichever neighbourhood you walk into.
              </p>
              <a
                href="#leadership"
                className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-body text-sm font-semibold text-primary-foreground transition-all duration-500 hover:-translate-y-0.5 hover:bg-ink-soft"
              >
                Meet our leadership
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={100} className="relative">
            <img
              src={aboutCampusAsset.url}
              alt="Students at an IEC Group campus"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-lift)] lg:block">
              <p className="font-display text-4xl font-semibold">1997</p>
              <p className="mt-2 font-body text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                The first campus
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {aboutFacts.map((f) => (
              <div key={f.label} className="bg-card px-8 py-10">
                <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary">
                  {f.value}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={aboutStudio.url}
                alt="Students at work in an IEC design studio"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-8 py-6 font-body text-sm leading-relaxed text-muted-foreground">
                Design studios where fashion and interior students work to live client briefs — the
                discipline IEC introduced to Nepal in 1997.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={aboutEarlyYears.url}
                alt="Children learning in an EuroKids early years classroom"
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-8 py-6 font-body text-sm leading-relaxed text-muted-foreground">
                Play-based early years classrooms across four Kathmandu neighbourhoods, run to one
                shared standard of care.
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {aboutValues.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-8">
                <h3 className="font-display text-xl font-semibold tracking-[-0.01em]">{v.title}</h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function Pillars() {
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="How we help"
          title="Four ways the group serves Nepal"
          intro="Every institution contributes to the same four commitments — in the classroom and well beyond it."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 90}>
                <div className="card-lift group h-full rounded-2xl border border-border bg-card p-8">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-8 font-display text-xl font-semibold tracking-[-0.01em]">
                    {p.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Institutions() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = institutions.filter((i) => filter === "All" || i.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, 4);

  return (
    <section id="institutions" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="The house"
            title="Ten-plus institutions, one standard"
            intro="Colleges, schools, studios and a consultancy — filter by what you're looking for."
          />
        </div>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setFilter(c);
                  setShowAll(false);
                }}
                className={`rounded-full border px-5 py-2 font-body text-[13px] font-medium transition-all duration-300 ${
                  filter === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {visible.map((inst, i) => (
            <Reveal key={inst.name} delay={i * 80}>
              <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="inline-flex rounded-full bg-secondary px-3 py-1 font-body text-[10px] uppercase tracking-[0.18em] text-primary">
                      {inst.category}
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-[-0.015em]">
                      {inst.name}
                    </h3>
                    <p className="mt-2 font-body text-[11px] uppercase tracking-[0.18em] text-brandred">
                      {inst.discipline}
                    </p>
                  </div>
                  {inst.logo ? (
                    <span className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-white p-1.5">
                      <img
                        src={inst.logo}
                        alt={`${inst.name} logo`}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </span>
                  ) : (
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary font-display text-sm font-semibold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                </div>

                {inst.highlight ? (
                  <p className="mt-6 inline-flex rounded-lg bg-secondary px-3 py-2 font-body text-[12px] font-semibold text-primary">
                    {inst.highlight}
                  </p>
                ) : null}

                <p className="mt-6 font-body text-sm leading-relaxed text-muted-foreground text-pretty">
                  {inst.blurb}
                </p>

                {inst.branches ? (
                  <div className="mt-6">
                    <p className="font-body text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Branches
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {inst.branches.map((b) => (
                        <span
                          key={b.name}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-body text-[12px] ${
                            b.status
                              ? "border-dashed border-brandred/40 text-brandred"
                              : "border-border text-foreground"
                          }`}
                        >
                          {b.name}
                          {b.status ? (
                            <span className="font-body text-[10px] uppercase tracking-[0.14em]">
                              {b.status}
                            </span>
                          ) : null}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}


                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                  <span className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <MapPin className="size-4 text-brandred" strokeWidth={1.6} />
                    {inst.locations}
                  </span>
                  {inst.href ? (
                    <a
                      href={inst.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary transition-colors duration-300 hover:text-brandred"
                    >
                      Visit site
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <span className="font-body text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Coming soon
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {!showAll && filtered.length > 4 ? (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-4 font-body text-sm font-semibold text-foreground transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40"
            >
              View all organizations
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="relative bg-secondary/50">
      <div className="absolute inset-0 grid-faint opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Where we work"
          title="Rooted in Kathmandu, felt across Nepal"
          intro="Hover a province to see how the group reaches it — through campuses, partner schools or alumni."
        />
        <Reveal delay={100} className="mt-14">
          <NepalMap />
        </Reveal>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Our impact"
          title="What 28 years actually looks like"
          intro="Not slogans — the specific, ordinary work that shapes a student's year."
        />
        <div className="mt-16 space-y-10">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article
                className={`grid items-center gap-10 rounded-2xl border border-border bg-card p-8 lg:grid-cols-2 lg:gap-16 lg:p-12 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-last" : ""
                }`}
              >
                <figure className="overflow-hidden rounded-xl bg-secondary">
                  <img
                    src={i === 0 ? aboutCampusAsset.url : heroUnity.url}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-[5/4] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
                  />
                </figure>
                <div>
                  <p className="eyebrow">{s.tag}</p>
                  <h3 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-balance">
                    {s.title}
                  </h3>
                  <p className="mt-5 font-body leading-relaxed text-muted-foreground text-pretty">
                    {s.body}
                  </p>
                  <div className="mt-8 flex items-baseline gap-4 border-t border-border pt-6">
                    <span className="font-display text-4xl font-semibold text-primary">
                      {s.stat}
                    </span>
                    <span className="font-body text-sm text-muted-foreground">{s.statNote}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.26em] text-brandgold">
            Our journey
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-balance lg:text-[3.1rem]">
            From one college to a group
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 top-[0.6rem] hidden h-px w-full bg-paper/20 lg:block" />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 110}>
                <div className="relative border-l border-paper/20 pl-6 lg:border-l-0 lg:pl-0">
                  <span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-brandgold lg:static lg:block" />
                  <p className="mt-0 font-display text-2xl font-semibold text-brandgold lg:mt-6">
                    {t.year}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-paper/70">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Leadership"
          title="The stewards of the house"
          intro="Three people have carried the group's standard since its earliest years — open a profile to read their full story."
        />
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {leaders.map((leader, i) => (
            <Reveal key={leader.name} delay={i * 100}>
              <Link
                to="/leadership/$slug"
                params={{ slug: leader.slug }}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl bg-secondary">
                  <img
                    src={leader.image}
                    alt={`Portrait of ${leader.name}`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-7 font-display text-2xl font-semibold tracking-[-0.015em]">
                  {leader.name}
                </h3>
                <p className="mt-2 font-body text-[11px] uppercase tracking-[0.2em] text-brandred">
                  {leader.role}
                </p>
                <p className="mt-5 font-body text-sm leading-relaxed text-muted-foreground text-pretty">
                  {leader.note}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary">
                  Read full profile
                  <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal>
          <p className="text-center font-body text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
            Institutions & partners in the group
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {institutions.map((inst, i) => (
            <Reveal key={inst.name} delay={i * 60}>
              <div className="flex h-28 items-center justify-center bg-card px-5 text-center grayscale transition-all duration-500 hover:grayscale-0">
                <span className="font-display text-[13px] font-semibold leading-snug text-primary opacity-60 transition-opacity duration-500 hover:opacity-100">
                  {inst.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices from our network"
          intro="Alumni, parents and industry partners on what the group has meant to them."
          align="center"
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <Quote className="size-7 text-brandgold" strokeWidth={1.5} />
                <blockquote className="mt-6 font-body leading-relaxed text-foreground text-pretty">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4 border-t border-border pt-6">
                  <span className="grid size-11 place-items-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">
                    {t.name.slice(0, 1)}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-semibold">{t.name}</span>
                    <span className="block font-body text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  {
    src: convocationAward.url,
    alt: "Award being presented on stage at the IEC College convocation ceremony",
    caption: "IEC College convocation",
    blurb:
      "Our most recent convocation, graced by chief guest Mrs. Sabina Kafle.",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: convocationProcession.url,
    alt: "Faculty and graduates in gowns during the IEC College convocation procession",
    caption: "Convocation procession",
    blurb: "Graduates and faculty walk in for the degree ceremony.",
    span: "lg:col-span-2",
  },
  {
    src: euroAnnualDay.url,
    alt: "Euro School students at a major production and annual day celebration",
    caption: "Euro School major production",
    blurb:
      "Our major production, annual day and investiture ceremony — the highlights of the Euro School calendar.",
    span: "",
  },
  {

    src: groupRunway.url,
    alt: "Models on the runway at IEC Designers Runway",
    caption: "IEC Designers Runway",
    blurb: "Fourteen editions of Nepal's biggest student fashion showcase.",
    span: "",
  },
  {
    src: groupFestival.url,
    alt: "EuroKids Bishalnagar children celebrating a Nepali festival in traditional dress",
    caption: "EuroKids Bishalnagar festivals",
    blurb: "Teej, Holi, Dashain and annual day — our littlest ones celebrate it all.",
    span: "",
  },
  {
    src: groupLab.url,
    alt: "Students working in a modern computer lab",
    caption: "Computer labs",
    blurb: "Short, job-focused IT courses across our campuses.",
    span: "lg:col-span-2",
  },
];

const studioImages = [
  {
    src: studioGreenscreen.url,
    alt: "Green screen shooting floor with studio lighting and a camera on a slider",
    caption: "Green screen floor",
    blurb: "Chroma-key shoots, lighting rigs and camera movement for film projects.",
    span: "lg:col-span-2",
  },
  {
    src: studioPodcast.url,
    alt: "Podcast set with sofas, boom microphones and a wall-mounted screen",
    caption: "Podcast & interview set",
    blurb: "A fully dressed set for podcasts, interviews and talk formats.",
    span: "",
  },
  {
    src: studioAudio.url,
    alt: "Audio control room with studio monitors, interface and editing workstation",
    caption: "Audio & edit room",
    blurb: "Recording, mixing and post-production in one place.",
    span: "",
  },
];



function Gallery() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Life at IEC"
          title="One group, many campuses"
          intro="From preschool playgrounds to convocation halls, runway shows and computer labs — a sense of the scale the group works at every single day."
          align="center"
        />
        <div className="mt-16 grid auto-rows-[200px] gap-4 sm:grid-cols-2 lg:auto-rows-[190px] lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.caption}
              delay={i * 90}
              className={`group relative overflow-hidden rounded-2xl border border-border ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                <p className="font-display text-lg font-semibold">{img.caption}</p>
                <p className="mt-1 max-w-[38ch] font-body text-sm text-primary-foreground/80">
                  {img.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudioSection() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="IEC School Studio"
          title="A professional studio on campus"
          intro="Our own production studio — green screen floor, podcast set and audio room — where students shoot, record and edit real work."
          align="center"
        />
        <div className="mt-16 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:auto-rows-[240px] lg:grid-cols-4">
          {studioImages.map((img, i) => (
            <Reveal
              key={img.caption}
              delay={i * 90}
              className={`group relative overflow-hidden rounded-2xl border border-border ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                <p className="font-display text-lg font-semibold">{img.caption}</p>
                <p className="mt-1 max-w-[38ch] font-body text-sm text-primary-foreground/80">
                  {img.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const infrastructureImages = [
  {
    src: infraIecCollege.url,
    alt: "IEC College of Art & Fashion campus with wide paved forecourt",
    caption: "IEC College of Art & Fashion",
    blurb: "A purpose-built campus with studios, workshops and open courtyards.",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    src: infraDesignIt.url,
    alt: "Four-storey IEC School of Design and IT building",
    caption: "IEC School of Design & IT",
    blurb: "Four floors of design studios and computer labs at Mandikhatar.",
    span: "lg:col-span-2",
  },
  {
    src: infraEuroSchool.url,
    alt: "Euro School building with school buses parked outside",
    caption: "Euro School",
    blurb: "An IB World School campus with its own transport fleet.",
    span: "lg:col-span-2",
  },
  {
    src: infraAuditorium.url,
    alt: "Large auditorium with tiered blue and red seating",
    caption: "Auditorium",
    blurb: "A full-scale auditorium for convocations, productions and assemblies.",
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    src: infraEurokidsHattigauda.url,
    alt: "EuroKids Hattigauda preschool building",
    caption: "EuroKids Hattigauda",
    blurb: "A premium preschool branch with covered play areas.",
    span: "",
  },
  {
    src: infraEurokidsBlock.url,
    alt: "EuroKids Block-A building with glass facade",
    caption: "EuroKids Block A",
    blurb: "Bright, glass-fronted early-years classrooms and play zones.",
    span: "",
  },
  {
    src: infraEurokidsSamakhusi.url,
    alt: "EuroKids Samakhusi with turf playground and slides",
    caption: "EuroKids Samakhusi",
    blurb: "Turfed outdoor playground built around safe, active learning.",
    span: "lg:col-span-2",
  },
  {
    src: infraCafeteria.url,
    alt: "Glass and timber cafeteria building at Euro School Hattigauda",
    caption: "Cafeteria — Euro School Hattigauda",
    blurb: "A two-level dining and social space serving students and staff every day.",
    span: "sm:col-span-2 lg:col-span-2",
  },
];

function InfrastructureSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Strong infrastructure"
          title="Campuses built to last"
          intro="Owned buildings, a full auditorium, laboratories, studios, playgrounds and transport — the group invests in physical infrastructure so learning never waits on facilities."
          align="center"
        />
        <div className="mt-16 grid auto-rows-[200px] gap-4 sm:grid-cols-2 lg:auto-rows-[210px] lg:grid-cols-4">
          {infrastructureImages.map((img, i) => (
            <Reveal
              key={img.caption}
              delay={i * 80}
              className={`group relative overflow-hidden rounded-2xl border border-border ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                <p className="font-display text-lg font-semibold">{img.caption}</p>
                <p className="mt-1 max-w-[38ch] font-body text-sm text-primary-foreground/80">
                  {img.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}






function CallToAction() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-primary px-8 py-20 text-center text-primary-foreground lg:px-16">
            <div className="absolute inset-0 grid-faint opacity-20" />
            <div className="relative">
              <h2 className="mx-auto max-w-[20ch] font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-balance lg:text-[3.25rem]">
                Nepal is stronger when we teach together
              </h2>
              <p className="mx-auto mt-6 max-w-[52ch] font-body leading-relaxed text-paper/75 text-pretty">
                Partner with the group, enrol a student, or bring your school into our network of
                campuses and counsellors.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-brandgold px-8 py-4 font-body text-sm font-semibold text-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-paper"
                >
                  Become a partner
                  <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-paper/40 px-8 py-4 font-body text-sm font-semibold text-paper transition-all duration-500 hover:-translate-y-0.5 hover:bg-paper/10"
                >
                  Get involved
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const details = [
    { label: "Telephone", value: "9860540054", href: "tel:9860540054", icon: Phone },
    {
      label: "Email",
      value: "info@iecgroupnepal.com",
      href: "mailto:info@iecgroupnepal.com",
      icon: Mail,
    },
    { label: "Hours", value: "Sunday – Friday · 9am – 5pm", href: null, icon: Clock },
    { label: "Location", value: "Kathmandu, Nepal", href: null, icon: MapPin },
  ];

  return (
    <section id="contact" className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <SectionHeading
            eyebrow="Correspondence"
            title="Begin a conversation"
            intro="Admissions, partnerships, or a visit to one of our campuses — the group office in Kathmandu will see to it personally."
          />

          <dl className="grid gap-6 sm:grid-cols-2">
            {details.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={d.label} delay={i * 80}>
                  <div className="card-lift h-full rounded-2xl border border-border bg-card p-7">
                    <Icon className="size-5 text-brandred" strokeWidth={1.6} />
                    <dt className="mt-6 font-body text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="mt-2 break-words font-display text-lg font-semibold">
                      {d.href ? (
                        <a
                          href={d.href}
                          className="transition-colors duration-300 hover:text-brandred"
                        >
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                </Reveal>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { label: "Facebook", icon: Facebook },
    { label: "Instagram", icon: Instagram },
    { label: "LinkedIn", icon: Linkedin },
    { label: "YouTube", icon: Youtube },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <span className="inline-block rounded-xl bg-paper p-3">
              <Wordmark className="h-12 lg:h-12" />
            </span>
            <p className="mt-6 max-w-[38ch] font-body text-sm leading-relaxed text-paper/70">
              IEC Group has been Nepal's education house since 1997 — eight institutions across
              design, IT, K-12 and early years, held to one standard of teaching and care.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#top"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-xl border border-paper/20 text-paper/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-brandgold hover:text-brandgold"
                  >
                    <Icon className="size-4" strokeWidth={1.6} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.24em] text-brandgold">
              Quick links
            </p>
            <ul className="mt-6 space-y-3 font-body text-sm text-paper/75">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={l.href} className="transition-colors duration-300 hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.24em] text-brandgold">
              Organizations
            </p>
            <ul className="mt-6 space-y-3 font-body text-sm text-paper/75">
              {institutions.map((i) => (
                <li key={i.name}>
                  <a
                    href={i.href ?? "#institutions"}
                    target={i.href ? "_blank" : undefined}
                    rel={i.href ? "noreferrer" : undefined}
                    className="transition-colors duration-300 hover:text-paper"
                  >
                    {i.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.24em] text-brandgold">
              Stay in touch
            </p>
            <p className="mt-6 font-body text-sm leading-relaxed text-paper/70">
              Admissions dates, showcases and campus news — a few times a year, never more.
            </p>
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-paper/25 bg-paper/10 px-4 py-3 font-body text-sm text-paper placeholder:text-paper/45 focus:border-brandgold focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-brandgold px-5 py-3 font-body text-sm font-semibold text-ink transition-colors duration-300 hover:bg-paper"
              >
                Sign up
              </button>
            </form>
            <p className="mt-6 font-body text-sm text-paper/70">
              <a href="tel:9860540054" className="hover:text-paper">
                9860540054
              </a>
              <br />
              <a href="mailto:info@iecgroupnepal.com" className="hover:text-paper">
                info@iecgroupnepal.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-8 sm:flex-row sm:items-center">
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-paper/60">
            © 1997–2026 IEC Group Nepal
          </p>
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-paper/60">
            Education… Our Passion
          </p>
        </div>
      </div>
    </footer>
  );
}
