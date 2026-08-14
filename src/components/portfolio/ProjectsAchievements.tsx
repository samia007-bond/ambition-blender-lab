import { Trophy, FolderKanban, Plus, ArrowRight, Award } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const PROJECT_POINTS = [
  "Participated in ITM Summit projects",
  "Applied IT and management knowledge",
  "Worked on project-based problem solving",
  "Received recognition through position prizes",
];

const PLACEHOLDER_FIELDS = [
  "Project Name",
  "Project Description",
  "Technologies Used",
  "Role",
  "Achievement",
  "Project Link",
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Academic & university work"
        description="Project experience from my Information Technology & Management studies. This section is built to grow as new work is added."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <Reveal className="surface-card p-7 sm:p-9">
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary">
              <FolderKanban className="h-5 w-5 text-primary" />
            </span>
            <div className="min-w-0">
              <h3 className="truncate font-display text-lg font-semibold">ITM Summit Projects</h3>
              <p className="text-xs text-muted-foreground">Academic / ITM Project</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            University-level project participation connected with the Information Technology &amp;
            Management field, combining technical work with management thinking.
          </p>
          <ul className="mt-5 grid gap-3">
            {PROJECT_POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="surface-card border-dashed p-7 sm:p-9">
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary">
              <Plus className="h-5 w-5 text-primary" />
            </span>
            <div className="min-w-0">
              <h3 className="truncate font-display text-lg font-semibold">Upcoming project slot</h3>
              <p className="text-xs text-muted-foreground">Ready to be filled in</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Details to add for each new project:
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {PLACEHOLDER_FIELDS.map((f) => (
              <li
                key={f}
                className="rounded-xl border border-dashed border-border px-4 py-3 text-xs text-muted-foreground"
              >
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={140}>
        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading eyebrow="Achievements" title="Recognition so far" />

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-surface)] p-8 sm:p-10">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-brand)]">
            <Trophy className="h-6 w-6 text-primary-foreground" />
          </span>
          <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
            ITM Summit Recognition
          </h3>
          <p className="mt-2 font-display text-base text-gradient">Two-Time Position Prize Winner</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            I took part in ITM Summit projects and earned position prizes on two separate occasions —
            recognition for teamwork, presentation, and applying IT and management knowledge to real
            problems.
          </p>
        </Reveal>

        <Reveal delay={100} className="surface-card grid content-center gap-6 p-8">
          <div>
            <p className="font-display text-4xl font-bold text-gradient">2×</p>
            <p className="mt-2 text-sm text-muted-foreground">Position prizes won</p>
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-start gap-3">
            <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              Awarded through project participation at the ITM Summit, Daffodil International
              University.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
