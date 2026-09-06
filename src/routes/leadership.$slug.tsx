import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";

import { getLeader, leaders } from "@/lib/leaders";

export const Route = createFileRoute("/leadership/$slug")({
  loader: ({ params }) => {
    const leader = getLeader(params.slug);
    if (!leader) throw notFound();
    return { leader };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Leader not found — IEC Group" }, { name: "robots", content: "noindex" }],
      };
    }
    const { leader } = loaderData;
    const title = `${leader.name} — ${leader.role} | IEC Group`;
    const description = leader.note.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: LeaderPage,
});

function LeaderPage() {
  const { leader } = Route.useLoaderData();
  const others = leaders.filter((l) => l.slug !== leader.slug);

  return (
    <div className="bg-background">
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <Link
            to="/"
            hash="leadership"
            className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" /> Back to IEC Group
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="overflow-hidden rounded-2xl bg-secondary">
              <img
                src={leader.image}
                alt={`Portrait of ${leader.name}`}
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div>
              <p className="font-body text-[11px] uppercase tracking-[0.24em] text-brandred">
                {leader.role}
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                {leader.name}
              </h1>
              <p className="mt-4 font-body text-lg text-muted-foreground">{leader.tagline}</p>
              {leader.intro.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="mt-5 max-w-[60ch] font-body leading-relaxed text-muted-foreground text-pretty"
                >
                  {p}
                </p>
              ))}
              {leader.links?.length ? (
                <div className="mt-8 flex flex-wrap gap-3">
                  {leader.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-body text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      {l.label}
                      <ArrowUpRight className="size-4" />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {leader.facts.map((f) => (
            <div key={f.label} className="bg-card px-8 py-10">
              <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-primary">
                {f.value}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {f.label}
              </p>
            </div>
          ))}
        </div>

        {leader.quote ? (
          <figure className="mt-14 rounded-2xl border border-border bg-card p-10 lg:p-14">
            <Quote className="size-7 text-brandred" strokeWidth={1.5} />
            <blockquote className="mt-6 max-w-[70ch] font-display text-xl leading-relaxed tracking-[-0.01em] sm:text-2xl">
              “{leader.quote.text}”
            </blockquote>
            <figcaption className="mt-6 font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {leader.name}
            </figcaption>
          </figure>
        ) : null}

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {leader.sections.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-xl font-semibold tracking-[-0.01em]">{s.title}</h2>
              <ul className="mt-6 space-y-3">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-body text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brandred" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <p className="font-body text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            More from the leadership
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/leadership/$slug"
                params={{ slug: o.slug }}
                className="card-lift group flex items-center gap-6 rounded-2xl border border-border bg-card p-6"
              >
                <img
                  src={o.image}
                  alt={`Portrait of ${o.name}`}
                  loading="lazy"
                  width={200}
                  height={200}
                  className="size-20 rounded-xl object-cover"
                />
                <span>
                  <span className="block font-display text-lg font-semibold">{o.name}</span>
                  <span className="mt-1 block font-body text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {o.role}
                  </span>
                </span>
                <ArrowUpRight className="ml-auto size-5 text-muted-foreground transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
