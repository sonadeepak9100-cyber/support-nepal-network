import leaderManish from "@/assets/leader-manish.jpg.asset.json";
import leaderShailaja from "@/assets/leader-sona.jpg.asset.json";
import leaderSonaDeepak from "@/assets/leader-sona-deepak.jpg.asset.json";

export type Leader = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  note: string;
  image: string;
  intro: string[];
  facts: { label: string; value: string }[];
  sections: { title: string; items: string[] }[];
  quote?: { text: string };
  links?: { label: string; href: string }[];
};

export const leaders: Leader[] = [
  {
    slug: "shailaja-adhikary",
    name: "Ms. Shailaja Adhikary",
    role: "Founder & Managing Director",
    tagline: "Visionary educationist and entrepreneur",
    note: "In 1997 she opened Nepal's first professional fashion and interior design institution in a small block in Bagbazar; a decade later she brought EuroKids to Nepal and went on to establish Euro School. Today she leads the IEC Group of Companies as Managing Director and serves as principal of Euro School.",
    image: leaderShailaja.url,
    intro: [
      "A dynamic and visionary entrepreneur, Ms. Shailaja Adhikary has spent close to three decades shaping education and design in Nepal. She began her working life as a banker at Grindlays Bank, holds an MBA in Marketing, and is pursuing a Doctorate in Business Administration at Golden Gate University, California.",
      "She introduced professional fashion and interior design education, and international primary education, to Nepal — founding IEC School of Art & Fashion in 1997, EuroKids Nepal in the mid-2000s, Euro School in 2008 and IEC College of Art & Fashion in 2009. In all she has established more than ten educational institutions.",
      "Euro School opened with thirteen students and is today counted among the most trusted schools in Kathmandu. IEC produces hundreds of fashion and interior graduates every year, and its alumni have founded more than eight hundred fashion labels of their own.",
    ],
    facts: [
      { label: "Years of excellence", value: "25+" },
      { label: "Institutions founded", value: "10+" },
      { label: "Labels founded by IECians", value: "800+" },
      { label: "Office", value: "Bishalnagar, Kathmandu" },
    ],
    sections: [
      {
        title: "Founder of",
        items: [
          "IEC School of Art & Fashion — 1997",
          "EuroKids Nepal — an international pre-school chain",
          "Euro School — 2008, a progressive top-ten trusted school",
          "IEC College of Art & Fashion — 2009",
        ],
      },
      {
        title: "Awards & recognition",
        items: [
          "Great Women of the 21st Century — American Biographical Institute, USA",
          "Educational Excellence Award — IIT New Delhi, India",
          "Best Women Entrepreneur — New Biz Conclave and Awards 2013, Nepal",
          "National Award for Excellence in Education — PSCWA of India",
          "Global Women Achievers — World Women Leadership Congress, India",
          "Rastriya Nari Samman 2074 and 2075, Nepal",
          "WOW Women Achievers Award 2025, Nepal",
          "Among the Top 30 Influential Women Entrepreneurs to watch in 2025 — NY Weekly",
          "International Gold Quality Award (USA) 2003 — IEC School of Art & Fashion",
          "Asian Top Fashion Organization of the Year 2016 and Best Brand Leadership Award 2018 — IEC College of Art & Fashion",
        ],
      },
      {
        title: "Memberships",
        items: [
          "Nepal India Chamber of Commerce & Industry — Co-Convener, Education and Human Capital",
          "Executive Member, Nepal Swiss Chamber of Commerce",
          "Executive Member, Nepal Britain Chamber of Commerce",
          "Member, Confederation of Nepalese Industries (CNI)",
          "Member, Zonta Club (Zonta International)",
          "Vice President, Quality Kathmandu Schools (QKS)",
          "General Secretary, International Education Providers Association of Nepal",
        ],
      },
      {
        title: "Beyond the classroom",
        items: [
          "Active contributor to social causes across Nepal",
          "Works with local bodies and non-governmental organisations on education and development projects",
        ],
      },
    ],
    quote: {
      text: "Education is not just about imparting knowledge; it's about shaping futures, building confidence, and creating opportunities. Every student who walks through our doors carries dreams, and it is our responsibility to nurture those dreams into reality.",
    },
    links: [{ label: "shailajaadhikary.com", href: "https://shailajaadhikary.com/" }],
  },
  {
    slug: "manish-kumar-deepak",
    name: "Manish Kumar Deepak",
    role: "Director, Operations",
    tagline: "Engineer, and the group's operating standard",
    note: "An engineer by training, he has held the group's operating standards since its very first year — campuses, facilities, faculty systems and the day-to-day discipline that keeps more than ten institutions running to one standard.",
    image: leaderManish.url,
    intro: [
      "An engineer by training, Manish Kumar Deepak has been with IEC since its very first year and is the person behind the way the group actually runs day to day.",
      "His work covers campus development and facilities, academic and administrative systems, faculty processes and compliance — the quiet infrastructure that lets a parent expect the same standard of care in Hattigauda as in Bishalnagar.",
      "As the group has grown from one college to more than ten institutions and campuses, his focus has stayed on scale without dilution: the same standards, documented and repeatable, wherever a new campus opens.",
    ],
    facts: [
      { label: "With the group since", value: "1997" },
      { label: "Campuses overseen", value: "10+" },
      { label: "Faculty & staff", value: "500+" },
      { label: "Base", value: "Kathmandu" },
    ],
    sections: [
      {
        title: "Responsibilities",
        items: [
          "Campus development, facilities and safety across the group",
          "Academic and administrative operating systems",
          "Faculty recruitment frameworks and staff development",
          "Regulatory compliance and institutional quality standards",
        ],
      },
    ],
  },
  {
    slug: "sona-deepak",
    name: "Sona Deepak",
    role: "Business Director",
    tagline: "Where creativity meets technology",
    note: "A graduate of Kodaikanal International School and the University of Leicester, he leads business development across the group and works at the meeting point of creativity and technology.",
    image: leaderSonaDeepak.url,
    intro: [
      "Sona Deepak studied at Kodaikanal International School in India and went on to the University of Leicester in the United Kingdom, and leads business development across the IEC Group.",
      "He works at the meeting point of creativity and technology — aligning the group's programmes with international standards through academic partnerships such as the one with Teesside University in the UK, industry-facing curricula, and new ventures in IT and overseas study.",
      "His most recent work includes taking IEC into short, job-focused technology courses and launching Metaphor Abroad Consultancy to guide Nepali students towards further study overseas.",
    ],
    facts: [
      { label: "Focus", value: "Growth & partnerships" },
      { label: "Newest ventures", value: "IT courses, Metaphor" },
      { label: "Studied at", value: "University of Leicester" },
      { label: "Base", value: "Kathmandu" },
    ],
    sections: [
      {
        title: "Focus areas",
        items: [
          "International academic partnerships, including Teesside University, UK",
          "New ventures: short IT courses and Metaphor Abroad Consultancy",
          "Industry-facing curriculum design and employer relationships",
          "Brand, admissions and growth across the group",
        ],
      },
    ],
  },
];

export const getLeader = (slug: string) => leaders.find((l) => l.slug === slug);
