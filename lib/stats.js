import palmares from "@/data/palmares.json";
import profile from "@/data/steeven.json";

export { profile };
export const combats = palmares.combats;

// Statistiques calculées à partir du palmarès (rien n'est écrit en dur)
export function computeStats(fights = combats) {
  const count = (result) => fights.filter((f) => f.resultat === result).length;
  return {
    total: fights.length,
    victoires: count("Victoire"),
    defaites: count("Défaite"),
    nuls: count("Nul"),
    ko: fights.filter((f) => f.resultat === "Victoire" && f.methode === "KO").length,
  };
}
