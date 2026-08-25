import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { useState } from "react";
import { images, type ImageKey } from "../assets/images";
import { projects, type Project } from "../data/content";
import { Container } from "./Container";
import { ProjectModal } from "./ProjectModal";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const cover = project.cover as ImageKey | undefined;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-alt text-left transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
    >
      {cover ? (
        <div className="aspect-video overflow-hidden">
          <img
            src={images[cover]}
            alt={project.title}
            loading="lazy"
            width={1200}
            height={675}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center bg-linear-to-br from-navy/10 to-accent/10 text-accent">
          <FolderGit2 size={36} strokeWidth={1.5} />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">{project.category}</p>
        <h3 className="mt-2 flex items-start justify-between gap-2 font-display text-lg font-semibold text-fg">
          {project.title}
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-fg-muted transition-colors group-hover:text-accent"
          />
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-fg-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full bg-bg px-2.5 py-1 text-xs text-fg-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <Container size="lg">
        <SectionHeading
          eyebrow="Accomplishments"
          title="My Projects"
          description="A selection of what I've built — from client platforms to research and hardware."
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={() => setActive(project)} />
          ))}
        </div>
      </Container>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
