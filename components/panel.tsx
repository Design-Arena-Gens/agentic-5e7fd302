import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PanelProps = {
  title?: string;
  accent?: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Panel({
  title,
  accent,
  description,
  children,
  className
}: PanelProps) {
  return (
    <section
      className={twMerge(
        "glass-card relative flex h-full flex-col gap-4 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-brand",
        className
      )}
    >
      {(title || accent || description) && (
        <header className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            {title && (
              <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
            )}
            {accent}
          </div>
          {description && (
            <p className="text-sm text-slate-400">{description}</p>
          )}
        </header>
      )}
      <div className="flex-1">{children}</div>
    </section>
  );
}
