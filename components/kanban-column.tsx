import { type ReactNode } from "react";

type KanbanColumnProps = {
  title: string;
  count: number;
  accent: string;
  children: ReactNode;
};

export function KanbanColumn({
  title,
  count,
  accent,
  children
}: KanbanColumnProps) {
  return (
    <div className="flex min-w-[240px] flex-1 flex-col gap-4 rounded-2xl border border-white/10 bg-base-800/70 p-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: accent }}
          />
          <h3 className="font-medium text-slate-100">{title}</h3>
        </div>
        <span className="text-xs text-slate-400">{count}</span>
      </header>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
