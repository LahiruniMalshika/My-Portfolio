import { Mail, Phone } from "lucide-react";
import { navLinks, profile, services } from "../data/content";
import { Container } from "./Container";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-fg">Let's talk</h3>
            <p className="mt-3 text-sm text-fg-muted">
              Final-year IT undergraduate from the University of Moratuwa, Sri Lanka, passionate about
              Information Technology and building useful software.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-fg">Links</h3>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-fg-muted hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-fg">Services</h3>
            <ul className="mt-3 space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <a href="#services" className="text-sm text-fg-muted hover:text-accent">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-fg">Have a question?</h3>
            <div className="mt-3 flex gap-3">
              <a
                href={profile.phoneHref}
                aria-label="Phone"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted hover:border-accent hover:text-accent"
              >
                <Phone size={15} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted hover:border-accent hover:text-accent"
              >
                <Mail size={15} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted hover:border-accent hover:text-accent"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-muted hover:border-accent hover:text-accent"
              >
                <GithubIcon size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-fg-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
