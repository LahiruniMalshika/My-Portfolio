import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { emailjs as emailjsConfig, profile } from "../data/content";
import { useToast } from "../hooks/useToast";
import { Container } from "./Container";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { SectionHeading } from "./SectionHeading";
import { Toast } from "./Toast";

const contactDetails = [
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/lahiruni-malshika", href: profile.linkedin },
  { icon: GithubIcon, label: "GitHub", value: "github.com/LahiruniMalshika", href: profile.github },
];

export function Contact() {
  const [sending, setSending] = useState(false);
  const { toast, showToast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    try {
      await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, {
        from_name: formData.get("name"),
        reply_to: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      });
      showToast("Message sent successfully!", "success");
      form.reset();
    } catch (error) {
      console.error("EmailJS send failed", error);
      showToast("Failed to send the message. Please try again.", "error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading eyebrow="Get In Touch" title="Contact Me" align="center" />

        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-bg-alt p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-muted focus:border-accent focus:outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-muted focus:border-accent focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-muted focus:border-accent focus:outline-none"
            />
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Message"
              className="w-full resize-none rounded-lg border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-muted focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-bg shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30 disabled:translate-y-0 disabled:opacity-60 disabled:shadow-none"
            >
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>

          <div className="space-y-4">
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-border bg-bg-alt p-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md hover:shadow-accent/10"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <item.icon size={18} />
                </span>
                <span>
                  <span className="block text-xs text-fg-muted">{item.label}</span>
                  <span className="block text-sm font-medium text-fg">{item.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Toast toast={toast} />
    </section>
  );
}
