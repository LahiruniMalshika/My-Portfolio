import { Download, Mail } from "lucide-react";
import { images } from "../assets/images";
import { profile } from "../data/content";
import { Container } from "./Container";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[28px_28px] opacity-60 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />
      <Container className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg-alt px-4 py-1.5 text-sm font-medium text-fg-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Available for opportunities
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-fg sm:text-5xl lg:text-5xl">
            <span className="text-3xl">Hi, I'm {profile.name.split(" ")[0]}</span>
            <br />
            <span className="text-accent">{profile.title}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-fg-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            >
              Contact me
            </a>
            <a
              href={profile.cvFile}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-fg transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-fg-muted transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-fg-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-fg-muted transition-colors hover:text-accent"
            >
              <GithubIcon size={20} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-br from-accent/30 via-accent/10 to-transparent blur-2xl" />
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl border border-accent/30" />
          <img
            src={images.portrait}
            alt={profile.name}
            width={900}
            height={1349}
            fetchPriority="high"
            className="aspect-900/1349 w-full rounded-3xl border border-border object-cover shadow-xl"
          />
        </div>
      </Container>
    </section>
  );
}
