import { ArrowRight, Sparkles, Download } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";
import { Reveal } from "./Reveal";

const KEYWORDS = ["Technology", "Business", "Innovation", "Entrepreneurship"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-motif" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pt-16 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-24 lg:pb-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Dhaka, Bangladesh · Available for collaboration
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
              Samia Parvin
              <br />
              <span className="text-gradient">Ananna</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 font-display text-sm text-foreground/90 sm:text-base">
              IT &amp; Management Student <span className="text-primary">|</span> Future Entrepreneur{" "}
              <span className="text-primary">|</span> Business &amp; IT Consultant
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              I'm an Information Technology &amp; Management student passionate about technology,
              business, and entrepreneurship. I'm developing my skills in programming, management,
              communication, and problem-solving with the goal of building innovative businesses and
              growing as an IT professional.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                View My Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Let's Connect
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Download CV <Download className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
              {KEYWORDS.map((k, i) => (
                <li key={k} className="flex items-center gap-3">
                  {i > 0 ? <span className="text-primary">·</span> : null}
                  {k}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={180} className="justify-self-center lg:justify-self-end">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2.5rem] opacity-50 blur-2xl"
              style={{ background: "var(--gradient-brand)" }}
              aria-hidden="true"
            />
            <div className="relative aspect-square w-[17rem] overflow-hidden rounded-full border-4 border-border bg-card shadow-2xl sm:w-[21rem]">
              <img
                src={profilePhoto}
                alt="Samia Parvin Ananna professional portrait"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-card/90 px-4 py-3 backdrop-blur">
              <p className="font-display text-lg font-bold">3.20</p>
              <p className="text-[11px] text-muted-foreground">Current CGPA</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
