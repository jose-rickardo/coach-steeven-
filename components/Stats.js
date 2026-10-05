export default function Stats({ stats }) {
  const items = [
    { label: "Combats", value: "25"},
    { label: "Victoires", value: "20" },
    { label: "Défaites", value: "5" },
    { label: "Nuls", value: stats.nuls },
    { label: "Victoires par KO", value: "5"},
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {items.map((s, i) => (
        <div
          key={s.label}
          className={`card p-4 text-center ${i === items.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
        >
          <p className="font-display text-4xl text-white">{s.value}</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
