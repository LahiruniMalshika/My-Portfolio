import { Briefcase, Cloud, Code2, Smartphone } from "lucide-react";
import type { Service } from "../data/content";
import { services } from "../data/content";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const icons: Record<Service["icon"], typeof Code2> = {
  code: Code2,
  smartphone: Smartphone,
  briefcase: Briefcase,
  cloud: Cloud,
};

export function Services() {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionHeading eyebrow="What I Do" title="My Services" align="center" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-bg-alt p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-base font-semibold text-fg">{service.title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
