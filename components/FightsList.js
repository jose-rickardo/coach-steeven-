"use client";

import { useState } from "react";
import FightCard from "./FightCard";

const filters = ["Tous", "Victoire", "Défaite", "Nul"];

export default function FightsList({ combats }) {
  const [filter, setFilter] = useState("Tous");
  const visibles = filter === "Tous" ? combats : combats.filter((f) => f.resultat === filter);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
              filter === f
                ? "border-blood-500 bg-blood-500 text-white"
                : "border-ring-700 text-zinc-400 hover:border-blood-500 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((f) => (
          <FightCard key={f.id} f={f} />
        ))}
      </div>
    </>
  );
}
