import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook, CheckCircle2, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { NAV_LINKS } from "./Nav";

const EMAIL = "ananna2305191007@diu.edu.bd";
const PHONE = "01309985422";

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", handle: "ananna2305191007" },
  { icon: Github, label: "GitHub", handle: "ananna2305191007@diu.edu.bd" },
  { icon: Facebook, label: "Facebook", handle: "SamiaParvin" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect"
        description="Whether it's a project, a collaboration, or a business idea — I'd be glad to hear from you."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="surface-card p-7 sm:p-9">
          <h3 className="font-display text-lg font-semibold">Contact information</h3>
          <ul className="mt-6 grid gap-4 text-sm">
            <li className="flex min-w-0 items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${EMAIL}`} className="truncate hover:text-primary">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${PHONE}`} className="hover:text-primary">
                {PHONE}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">Dhaka, Bangladesh</span>
            </li>
          </ul>

          <h4 className="mt-8 font-display text-sm font-semibold tracking-wide uppercase">
            Social profiles
          </h4>
          <ul className="mt-4 grid gap-3">
            {SOCIALS.map(({ icon: Icon, label, handle }) => (
              <li key={label}>
                <span className="flex min-w-0 items-center gap-3 rounded-xl border border-border px-4 py-3 transition-colors hover:border-primary/50">
                  <Icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block truncate text-sm">{handle}</span>
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Profile links can be configured once the full URLs are available.
          </p>
        </Reveal>

        <Reveal delay={100} className="surface-card p-7 sm:p-9">
          {sent ? (
            <div className="grid min-h-[22rem] place-items-center text-center">
              <div>
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-5 font-display text-xl font-semibold">Thank you for reaching out!</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Your message has been noted. Samia will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="What is this about?" />
              <label className="grid gap-2">
                <span className="text-xs tracking-wide text-muted-foreground uppercase">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="resize-none rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs tracking-wide text-muted-foreground uppercase">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
      />
    </label>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="font-display text-xl font-bold">Samia Parvin Ananna</p>
          <p className="mt-2 text-sm text-muted-foreground">
            IT &amp; Management Student | Future Entrepreneur | Business &amp; IT Consultant
          </p>
          <p className="mt-4 text-sm text-gradient font-display">
            Building ideas with technology and business.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
          <a href={`mailto:${EMAIL}`} className="mt-5 block text-sm hover:text-primary">
            {EMAIL}
          </a>
        </div>

        <nav>
          <p className="font-display text-sm font-semibold tracking-wide uppercase">Quick links</p>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} Samia Parvin Ananna. All rights reserved.
      </div>
    </footer>
  );
}
