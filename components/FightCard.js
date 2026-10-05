import Photo from "./Photo";

const badges = {
  Victoire: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40",
  Défaite: "bg-red-500/15 text-red-400 border-red-500/40",
  Nul: "bg-zinc-500/15 text-zinc-300 border-zinc-500/40",
};

export default function FightCard({ f }) {
  const infos = [
    ["Date", f.date],
    ["Poids", f.poids],
    ["Discipline", f.discipline],
    ["Méthode", `${f.methode} · ${f.round}`],
  ];

  return (
    <article className="card flex flex-col overflow-hidden">
      <Photo label={f.photo} src={f.photo} className="h-44 w-full" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl">vs {f.adversaire}</h3>
          <span
            className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold uppercase ${
              badges[f.resultat] || badges.Nul
            }`}
          >
            {f.resultat}
          </span>
        </div>

        {f.titre && <p className="text-sm font-semibold text-blood-400">🏆 {f.titre}</p>}

        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-zinc-400">
          {infos.map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs uppercase text-zinc-500">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
          <div className="col-span-2">
            <dt className="text-xs uppercase text-zinc-500">Événement</dt>
            <dd>
              {f.evenement} — {f.lieu}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
