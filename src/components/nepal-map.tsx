import { useState } from "react";

export type Province = {
  id: string;
  name: string;
  active: boolean;
  detail: string;
  points: string;
  labelX: number;
  labelY: number;
};

export const provinces: Province[] = [
  {
    id: "sudurpashchim",
    name: "Sudurpashchim",
    active: false,
    detail: "Alumni and partner schools across Dhangadhi and Mahendranagar.",
    points: "34,96 96,52 158,60 186,104 178,182 122,214 60,196 30,148",
    labelX: 104,
    labelY: 130,
  },
  {
    id: "karnali",
    name: "Karnali",
    active: false,
    detail: "Scholarship students from Surkhet and Jumla study at our campuses.",
    points: "178,72 258,44 336,60 348,124 300,160 200,168 172,132",
    labelX: 258,
    labelY: 110,
  },
  {
    id: "gandaki",
    name: "Gandaki",
    active: true,
    detail: "EuroKids franchise interest and design workshops in Pokhara.",
    points: "342,58 424,38 496,64 500,118 432,146 356,136 336,102",
    labelX: 418,
    labelY: 96,
  },
  {
    id: "lumbini",
    name: "Lumbini",
    active: false,
    detail: "Career counselling camps with schools in Butwal and Nepalgunj.",
    points: "196,170 300,162 430,150 452,196 380,232 268,228 202,206",
    labelX: 320,
    labelY: 196,
  },
  {
    id: "bagmati",
    name: "Bagmati",
    active: true,
    detail:
      "Home province. All six institutions: Mandikhatar, Miteripul, Hattigauda, Samakhusi, Bishalnagar, Tinkune.",
    points: "498,62 580,52 636,80 640,136 578,172 494,164 462,116",
    labelX: 552,
    labelY: 112,
  },
  {
    id: "madhesh",
    name: "Madhesh",
    active: true,
    detail: "Students from Janakpur and Birgunj boarding with our K-12 school.",
    points: "456,192 546,174 646,166 672,196 618,226 508,232 452,216",
    labelX: 558,
    labelY: 200,
  },
  {
    id: "koshi",
    name: "Koshi",
    active: true,
    detail: "Design and IT admissions drives in Biratnagar and Dharan.",
    points: "642,74 716,58 806,86 838,140 776,190 682,196 646,150",
    labelX: 736,
    labelY: 128,
  },
];

export function NepalMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const current = provinces.find((p) => p.id === hovered) ?? null;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.6fr_1fr]">
      <div className="rounded-2xl border border-border bg-card p-4 sm:p-8">
        <svg
          viewBox="0 0 880 270"
          role="img"
          aria-label="Map of Nepal showing provinces where IEC Group is active"
          className="w-full"
        >
          {provinces.map((p) => {
            const isHovered = hovered === p.id;
            return (
              <g
                key={p.id}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(p.id)}
                onBlur={() => setHovered(null)}
                tabIndex={0}
                className="cursor-pointer outline-none"
              >
                <polygon
                  points={p.points}
                  className={`transition-all duration-500 ${
                    p.active
                      ? isHovered
                        ? "fill-brandred stroke-paper"
                        : "fill-primary stroke-paper"
                      : isHovered
                        ? "fill-ink-soft/45 stroke-paper"
                        : "fill-secondary stroke-paper"
                  }`}
                  strokeWidth={2}
                  style={{ transformOrigin: `${p.labelX}px ${p.labelY}px` }}
                />
                <text
                  x={p.labelX}
                  y={p.labelY}
                  textAnchor="middle"
                  className={`pointer-events-none font-body text-[13px] font-semibold ${
                    p.active ? "fill-paper" : "fill-muted-foreground"
                  }`}
                >
                  {p.name}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-border pt-5">
          <span className="flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-3 rounded-sm bg-primary" /> Active presence
          </span>
          <span className="flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-3 rounded-sm bg-secondary ring-1 ring-border" /> Reach through
            alumni
          </span>
        </div>
      </div>

      <div className="min-h-[13rem] rounded-2xl border border-border bg-secondary/50 p-8">
        <p className="eyebrow">{current ? "Province" : "Hover the map"}</p>
        <h3 className="mt-4 font-display text-2xl tracking-[-0.01em]">
          {current ? current.name : "Seven provinces, one network"}
        </h3>
        <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
          {current
            ? current.detail
            : "Our campuses sit in Kathmandu, but our students, alumni and partner schools reach every province of Nepal."}
        </p>
      </div>
    </div>
  );
}
