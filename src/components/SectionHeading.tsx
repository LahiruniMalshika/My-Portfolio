import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent uppercase ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold text-fg sm:text-4xl">{title}</h2>
      {description && (
        <p className={`mt-3 max-w-2xl text-fg-muted ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
