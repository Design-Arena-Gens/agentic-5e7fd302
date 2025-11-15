type ModelCardProps = {
  name: string;
  tier: string;
  subscribers: number;
  utilization: number;
  accent: string;
};

export function ModelCard({
  name,
  tier,
  subscribers,
  utilization,
  accent
}: ModelCardProps) {
  return (
    <article className="glass-card flex flex-col gap-4 rounded-2xl border border-white/10 p-5">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold uppercase tracking-widest text-white"
            style={{ background: accent }}
          >
            {tier}
          </span>
          <div>
            <h4 className="text-base font-semibold text-slate-100">{name}</h4>
            <p className="text-xs text-slate-400">
              {subscribers.toLocaleString()} subscribers
            </p>
          </div>
        </div>
        <span className="text-xs uppercase tracking-[0.22em] text-slate-500">
          {utilization}% util
        </span>
      </header>
      <div className="h-2 rounded-full bg-base-700">
        <div
          className="h-full rounded-full"
          style={{ width: `${utilization}%`, background: accent }}
        />
      </div>
    </article>
  );
}
