import { Badge } from "@/components/badge";

type PromptCardProps = {
  title: string;
  audience: string;
  core: string;
  context: string;
};

export function PromptCard({
  title,
  audience,
  core,
  context
}: PromptCardProps) {
  return (
    <article className="glass-card flex flex-col gap-3 rounded-2xl border border-white/8 p-5">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-semibold text-slate-100">{title}</h4>
        <Badge tone="cyan">{audience}</Badge>
      </div>
      <p className="text-sm text-slate-300">{core}</p>
      <p className="text-xs text-slate-500">{context}</p>
    </article>
  );
}
