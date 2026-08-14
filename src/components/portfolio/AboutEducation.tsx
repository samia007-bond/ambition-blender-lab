import { GraduationCap, MapPin, Target, Briefcase, Code2, Building2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const STATS = [
  { value: "2023–Present", label: "University Journey" },
  { value: "GPA 3.20", label: "Current Average CGPA" },
  { value: "2×", label: "Position Prize Winner" },
  { value: "3 Countries", label: "Travel Experience" },
];

const AMBITIONS = [
  { icon: Target, text: "Become an entrepreneur and build her own business" },
  { icon: Code2, text: "Work as an IT developer" },
  { icon: Briefcase, text: "Work in the management and technology sector" },
  { icon: Building2, text: "Gain experience in major IT companies in Bangladesh or abroad" },
];

const EDUCATION = [
  {
    degree: "Bachelor's Degree",
    field: "Information Technology & Management",
    place: "Daffodil International University",
    period: "2023 – Present",
    result: "Current average CGPA: 3.20",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    place: "Dhaka Cantonment Girls Public School & College",
    period: "2019 – 2021",
    result: "GPA: 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    place: "Monipur High School and College",
    period: "2017 – 2019",
    result: "GPA: 5.00",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="About Me"
        title="Technology and management, studied side by side"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="surface-card p-7 sm:p-9">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            I'm currently studying Information Technology &amp; Management at Daffodil International
            University, a journey that started in 2023 and is still continuing. The programme lets me
            build technical foundations in programming and IT while learning how businesses actually
            operate, plan, and grow.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            My long-term aim is to combine technical programming skills with business and management
            knowledge — so I can build products and eventually run a company of my own.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-foreground">
            <MapPin className="h-4 w-4 text-primary" /> Living in Dhaka, Bangladesh
          </p>
        </Reveal>

        <Reveal delay={90} className="surface-card p-7 sm:p-9">
          <h3 className="font-display text-lg font-semibold">Career ambitions</h3>
          <ul className="mt-5 grid gap-4">
            {AMBITIONS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex min-w-0 items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <span className="text-sm text-muted-foreground">{text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 70} className="surface-card p-6">
            <p className="font-display text-xl font-bold text-gradient">{s.value}</p>
            <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading eyebrow="Education" title="Academic timeline" />

      <ol className="relative mt-12 ml-3 border-l border-border pl-8 sm:ml-6 sm:pl-12">
        {EDUCATION.map((e, i) => (
          <Reveal as="li" key={e.degree} delay={i * 110} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[41px] mt-2 grid h-8 w-8 place-items-center rounded-full border border-border bg-card sm:-left-[61px]"
              aria-hidden="true"
            >
              <GraduationCap className="h-4 w-4 text-primary" />
            </span>
            <div className="surface-card p-6 sm:p-7">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <h3 className="font-display text-base font-semibold sm:text-lg">{e.degree}</h3>
                <span className="shrink-0 rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-primary">{e.field}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
              <p className="mt-4 text-sm font-medium">{e.result}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
