import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type MetricCardProps = {
  label: string;
  value: string;
  delta?: {
    value: string;
    positive?: boolean;
  };
  icon?: ReactNode;
  className?: string;
};

export function MetricCard({
  label,
  value,
  delta,
  icon,
  className
}: MetricCardProps) {
  return (
    <div
      className={twMerge(
        "glass-card flex flex-1 items-center justify-between gap-4 rounded-2xl border border-white/5 px-6 py-5",
        className
      )}
    >
      <div className="flex flex-col gap-1.5">
        <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
          {label}
        </span>
        <span className="text-2xl font-semibold text-slate-100">{value}</span>
      </div>
      <div className="flex flex-col items-end gap-2">
        {icon && (
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300 ring-1 ring-accent-500/30">
            {icon}
          </span>
        )}
        {delta && (
          <span
            className={twMerge(
              "text-xs font-medium",
              delta.positive !== false ? "text-emerald-400" : "text-rose-400"
            )}
          >
            {delta.value}
          </span>
        )}
      </div>
    </div>
  );
}
