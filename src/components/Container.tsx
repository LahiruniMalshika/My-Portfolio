import type { PropsWithChildren } from "react";

const sizes = {
  md: "max-w-5xl",
  lg: "max-w-6xl",
} as const;

export function Container({
  children,
  className = "",
  size = "md",
}: PropsWithChildren<{ className?: string; size?: keyof typeof sizes }>) {
  return <div className={`mx-auto w-full ${sizes[size]} px-6 ${className}`}>{children}</div>;
}
