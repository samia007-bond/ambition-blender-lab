import {
  Terminal,
  FileSpreadsheet,
  Users,
  Lightbulb,
  ArrowRight,
  Presentation,
  Cpu,
  LineChart,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const SKILL_GROUPS = [
  { icon: Terminal, title: "Programming", items: ["C", "C++", "Python", "SQL"] },
  {
    icon: FileSpreadsheet,
    title: "Productivity & Office Tools",
    items: ["Microsoft Excel", "Microsoft PowerPoint"],
  },
  {
    icon: Users,
    title: "Professional Skills",
    items: [
      "Communication",
      "Presentation",
      "Problem Solving",
      "Teamwork",
      "Management",
      "Business-oriented thinking",
    ],
  },
  {
    icon: Lightbulb,
    title: "Business & IT",
    items: [
      "IT Management",
      "Business Concepts",
      "Business & IT Consulting",
      "Technology-based Problem Solving",
      "Entrepreneurship",
    ],
  },
];

const SERVICES = [
  {
    icon: LineChart,
    title: "Business Consulting",
    text: "Help businesses think through technology-related opportunities, digital solutions, and business ideas.",
  },
  {
    icon: Cpu,
    title: "IT Consulting",
    text: "Provide technology-focused guidance by combining IT knowledge with management and business perspectives.",
  },
  {
    icon: Lightbulb,
    title: "Technology & Business Solutions",
    text: "Analyze business needs and suggest practical technology-oriented approaches.",
  },
  {
    icon: Presentation,
    title: "Presentation & Business Support",
    text: "Create organized, professional presentations and business-oriented materials using tools such as Microsoft PowerPoint and Excel.",
  },
];

const LANGUAGES = [
  { name: "Bangla", level: "Fluent" },
  { name: "English", level: "Fluent / Professional" },
  { name: "Hindi", level: "Conversational" },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Skills"
        title="A hybrid skill set"
        description="Skills I'm actively developing across programming, professional practice, and business thinking."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {SKILL_GROUPS.map(({ icon: Icon, title, items }, i) => (
          <Reveal key={title} delay={i * 80} className="surface-card group p-7">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="truncate font-display text-lg font-semibold">{title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 surface-card p-7">
        <h3 className="font-display text-lg font-semibold">Languages</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {LANGUAGES.map((l) => (
            <div key={l.name} className="rounded-xl border border-border p-4">
              <p className="font-display text-sm font-semibold">{l.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{l.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Services"
          title="Business & IT consulting"
          description="Practical support at the intersection of technology and management."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="surface-card p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)]">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 grid items-center gap-5 rounded-3xl border border-border bg-[image:var(--gradient-surface)] p-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:p-9">
            <p className="font-display text-lg font-semibold sm:text-xl">
              Have a business or technology idea? Let's discuss it.
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
