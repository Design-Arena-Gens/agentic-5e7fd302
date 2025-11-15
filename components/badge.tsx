import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BadgeProps = {
  children: ReactNode;
  tone?: "accent" | "cyan" | "slate" | "amber";
  className?: string;
};

const toneStyles: Record<Required<BadgeProps>["tone"], string> = {
  accent: "bg-accent-500/20 text-accent-200 ring-1 ring-accent-500/40",
  cyan: "bg-cyan-500/20 text-cyan-200 ring-1 ring-cyan-500/30",
  slate: "bg-slate-500/20 text-slate-200 ring-1 ring-slate-500/20",
  amber: "bg-amber-500/20 text-amber-200 ring-1 ring-amber-500/30"
};

export function Badge({
  children,
  tone = "accent",
  className
}: BadgeProps) {
  return (
    <span
      className={twMerge(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide uppercase",
        toneStyles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
