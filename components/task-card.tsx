import { Badge } from "@/components/badge";

type TaskCardProps = {
  title: string;
  subtitle: string;
  due: string;
  focus: string;
  tone?: "accent" | "cyan" | "amber";
};

export function TaskCard({
  title,
  subtitle,
  due,
  focus,
  tone = "accent"
}: TaskCardProps) {
  return (
    <article className="glass-card flex flex-col gap-2 rounded-xl border border-white/10 p-4">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{due}</span>
        <Badge tone={tone}>{focus}</Badge>
      </div>
      <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
      <p className="text-xs text-slate-400">{subtitle}</p>
    </article>
  );
}
