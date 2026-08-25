import { skillGroups, softSkills } from "../data/content";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="bg-bg-alt py-24">
      <Container>
        <SectionHeading
          eyebrow="What I Know"
          title="Technical Skills"
          description="A diverse toolbox I rely on to deliver high-quality results across the stack."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-bg p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-sm text-fg-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
            Soft Skills
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-strong"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
