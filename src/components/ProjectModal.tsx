import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";
import { images } from "../assets/images";
import type { Project } from "../data/content";
import { GithubIcon } from "./icons/GithubIcon";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [slide, setSlide] = useState(0);
  const gallery = project.gallery ?? [];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setSlide((s) => (s + 1) % gallery.length);
      if (e.key === "ArrowLeft") setSlide((s) => (s - 1 + gallery.length) % gallery.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, gallery.length]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-bg p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">{project.category}</p>
            <h3 className="mt-1 font-display text-xl font-semibold text-fg">{project.title}</h3>
            {project.role && <p className="mt-1 text-sm text-fg-muted">{project.role}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-fg-muted hover:border-accent hover:text-accent"
          >
            <X size={16} />
          </button>
        </div>

        {gallery.length > 0 && (
          <div className="relative mb-6 flex max-h-[60vh] items-center justify-center overflow-hidden rounded-xl border border-border bg-bg-alt">
            <img
              src={images[gallery[slide] as keyof typeof images]}
              alt={`${project.title} screenshot ${slide + 1}`}
              loading="lazy"
              className="max-h-[60vh] w-full object-contain"
            />
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => setSlide((s) => (s - 1 + gallery.length) % gallery.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-bg/80 text-fg shadow"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => setSlide((s) => (s + 1) % gallery.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-bg/80 text-fg shadow"
                >
                  <ChevronRight size={16} />
                </button>
                <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {gallery.map((g, i) => (
                    <span
                      key={g}
                      className={`h-1.5 w-1.5 rounded-full ${i === slide ? "bg-accent" : "bg-bg/70"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-fg-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              <ExternalLink size={15} />
              Visit site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              <GithubIcon size={15} />
              GitHub Repository
            </a>
          )}
          {project.githubUrls?.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
            >
              <GithubIcon size={15} />
              {repo.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
