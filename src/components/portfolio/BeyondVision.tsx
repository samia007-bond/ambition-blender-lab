import { Plane, Cake, Palette, Mic2, Music, BookOpen, Hammer, Crown } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const TRAVEL = ["UAE", "Maldives", "Sri Lanka"];

const INTERESTS = [
  { icon: Cake, label: "Baking cakes" },
  { icon: Palette, label: "Drawing" },
  { icon: Mic2, label: "Singing" },
  { icon: Music, label: "Dancing" },
];

const STEPS = [
  {
    icon: BookOpen,
    title: "Learn",
    text: "Develop stronger programming, technology, and management knowledge.",
  },
  { icon: Hammer, title: "Build", text: "Create useful technology and business solutions." },
  { icon: Crown, title: "Lead", text: "Become an entrepreneur and build a successful business." },
];

export function Beyond() {
  return (
    <section id="beyond" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Beyond Technology"
        title="The person behind the portfolio"
        description="Curiosity doesn't stop at the classroom — travel and creative hobbies shape how I think and work."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="surface-card p-7 sm:p-9">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary">
            <Plane className="h-5 w-5 text-primary" />
          </span>
          <h3 className="mt-5 font-display text-lg font-semibold">Travel</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Places I've had the chance to visit and learn from.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {TRAVEL.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {INTERESTS.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 80} className="surface-card group grid content-center p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary transition-transform duration-300 group-hover:-translate-y-1">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <p className="mt-4 font-display text-base font-semibold">{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="My Vision" title="Where I'm heading" />

        <Reveal delay={80}>
          <blockquote className="mt-10 rounded-3xl border border-border bg-[image:var(--gradient-surface)] p-8 font-display text-xl leading-snug font-semibold sm:p-12 sm:text-3xl">
            “My goal is to combine technology, management, and entrepreneurship to build meaningful
            solutions and eventually create a successful business.”
          </blockquote>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100} className="surface-card p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)]">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <span className="font-display text-3xl font-bold text-muted-foreground/30">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
