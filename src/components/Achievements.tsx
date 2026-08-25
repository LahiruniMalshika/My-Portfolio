import { Trophy, Users } from "lucide-react";
import { achievements, involvements, type Achievement } from "../data/content";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

function AchievementList({ items }: { items: Achievement[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.title}
          className="rounded-xl border border-border bg-bg p-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md hover:shadow-accent/10"
        >
          <p className="font-medium text-fg">{item.title}</p>
          <p className="mt-1 text-sm text-fg-muted">{item.note}</p>
        </li>
      ))}
    </ul>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="bg-bg-alt py-24">
      <Container>
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements & Participations"
          description="Competitions I've taken part in and the communities I help lead."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-accent">
              <Trophy size={16} />
              Competitions
            </h3>
            <AchievementList items={achievements} />
          </div>
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-accent">
              <Users size={16} />
              Leadership & Involvement
            </h3>
            <AchievementList items={involvements} />
          </div>
        </div>
      </Container>
    </section>
  );
}
