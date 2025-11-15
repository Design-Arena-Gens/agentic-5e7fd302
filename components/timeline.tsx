import { Badge } from "@/components/badge";

type TimelineEvent = {
  time: string;
  title: string;
  detail: string;
  badge: string;
  tone?: "accent" | "cyan" | "amber";
};

const colorMap: Record<NonNullable<TimelineEvent["tone"]>, string> = {
  accent: "bg-accent-400/80",
  cyan: "bg-cyan-400/70",
  amber: "bg-amber-400/80"
};

export function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <ol className="relative space-y-6 border-l border-white/10 pl-6">
      {events.map((event, index) => (
        <li key={index} className="relative flex flex-col gap-1 text-sm">
          <span
            className={`absolute -left-[11px] top-1 h-2.5 w-2.5 rounded-full border border-white/50 ${
              colorMap[event.tone ?? "accent"]
            }`}
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
              {event.time}
            </span>
            <Badge tone={event.tone ?? "accent"}>{event.badge}</Badge>
          </div>
          <span className="font-semibold text-slate-100">{event.title}</span>
          <span className="text-xs text-slate-400">{event.detail}</span>
        </li>
      ))}
    </ol>
  );
}
