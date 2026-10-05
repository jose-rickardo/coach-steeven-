import Stats from "@/components/Stats";
import FightsList from "@/components/FightsList";
import { profile, combats, computeStats } from "@/lib/stats";

export const metadata = { title: "Palmarès" };

export default function PalmaresPage() {
  return (
    <section className="container-page py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blood-400">
        {profile.nom} · {profile.classe}
      </p>
      <h1 className="mt-2 text-5xl sm:text-6xl">Palmarès</h1>
      <p className="mt-4 max-w-2xl text-zinc-400">
        Tous les combats de {profile.nom} en {profile.disciplines.join(" et ")}, du plus récent au plus ancien.
      </p>

      <div className="mt-10">
        <Stats stats={computeStats()} />
      </div>

      <FightsList combats={combats} />
    </section>
  );
}
