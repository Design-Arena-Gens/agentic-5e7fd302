type AssetTileProps = {
  title: string;
  category: string;
  status: string;
  palette: [string, string];
};

export function AssetTile({
  title,
  category,
  status,
  palette
}: AssetTileProps) {
  const [primary, secondary] = palette;
  return (
    <article className="glass-card group relative overflow-hidden rounded-2xl border border-white/5 p-5 transition duration-300 hover:border-accent-400/40">
      <div
        className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-80"
        style={{
          background: `radial-gradient(circle at top left, ${primary}22, transparent 50%), radial-gradient(circle at bottom right, ${secondary}22, transparent 55%)`
        }}
      />
      <div className="relative flex flex-col gap-3">
        <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
          {category}
        </span>
        <h4 className="text-lg font-semibold text-slate-100">{title}</h4>
        <span
          className="inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider text-white"
          style={{
            background: `linear-gradient(120deg, ${primary}, ${secondary})`
          }}
        >
          {status}
        </span>
      </div>
    </article>
  );
}
