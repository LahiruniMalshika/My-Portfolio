import { experience } from "../data/content";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="bg-bg-alt py-24">
      <Container>
        <SectionHeading eyebrow="My Journey" title="Work Experience" />

        <ol className="relative space-y-10 border-l border-border pl-8">
          {experience.map((job) => (
            <li key={`${job.role}-${job.period}`} className="relative">
              <span className="absolute -left-[2.31rem] top-1.5 h-3 w-3 rounded-full border-2 border-bg-alt bg-accent" />
              <p className="text-sm font-medium text-accent">{job.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-fg">{job.role}</h3>
              <p className="text-sm text-fg-muted">{job.company}</p>

              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm text-fg-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-bg px-3 py-1 text-xs font-medium text-fg-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
