import { Download, Mail, MapPin, Phone } from "lucide-react";
import { education, profile } from "../data/content";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading eyebrow="My Intro" title="About Me" description={profile.summary} />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-fg-muted">
                <MapPin size={16} className="shrink-0 text-accent" />
                {profile.location}
              </li>
              <li className="flex items-center gap-3 text-fg-muted">
                <Mail size={16} className="shrink-0 text-accent" />
                <a href={`mailto:${profile.email}`} className="hover:text-accent">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-fg-muted">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href={profile.phoneHref} className="hover:text-accent">
                  {profile.phone}
                </a>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border bg-bg-alt px-3 py-1 text-xs font-medium text-fg-muted"
                >
                  {interest}
                </span>
              ))}
            </div>

            <a
              href={profile.cvFile}
              download
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-fg transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-bg-alt p-6">
            <h3 className="font-display text-lg font-semibold text-fg">Education</h3>
            {education.map((item) => (
              <div key={item.degree} className="mt-4">
                <p className="font-medium text-fg">{item.degree}</p>
                <p className="text-sm text-fg-muted">
                  {item.school} · {item.period}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-fg-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
