
export type Lang = { name: string; pct: number; className: string };
export default function LanguageBar({ langs }: { langs: Lang[] }) {
  const total = langs.reduce((a, b) => a + b.pct, 0);
  const normalized =
    total === 100 ? langs : langs.map((l) => ({ ...l, pct: (l.pct / total) * 100 }));

  return (
    <div className="mt-4">
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div className="flex h-full w-full">
          {normalized.map((l) => (
            <div
              key={l.name}
              className={l.className}
              style={{ width: `${l.pct}%` }}
              title={`${l.name} ${Math.round(l.pct)}%`}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-300">
        {langs.map((l) => (
          <div key={l.name} className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${l.className}`} />
            <span>{l.name}</span>
            <span className="text-slate-400">{l.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}