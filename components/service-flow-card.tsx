import { type ReactNode } from "react";
import { Badge } from "@/components/badge";

type ServiceFlowCardProps = {
  title: string;
  stage: string;
  timeline: string;
  outcomes: string[];
  icon: ReactNode;
  tone?: "accent" | "cyan" | "amber";
};

export function ServiceFlowCard({
  title,
  stage,
  timeline,
  outcomes,
  icon,
  tone = "accent"
}: ServiceFlowCardProps) {
  return (
    <article className="glass-card flex flex-col gap-4 rounded-2xl border border-white/8 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-200 ring-1 ring-accent-500/30">
            {icon}
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
            <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
              {timeline}
            </span>
          </div>
        </div>
        <Badge tone={tone}>{stage}</Badge>
      </div>
      <ul className="grid gap-2 text-sm text-slate-300">
        {outcomes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-accent-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
