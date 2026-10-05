import Link from "next/link";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import FightCard from "@/components/FightCard";
import { profile, combats, computeStats } from "@/lib/stats";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function HomePage() {
  const stats = computeStats();
  const recents = combats.slice(0, 3);
  const titres = combats.filter((f) => f.titre).slice(0, 3);

  const fiche = [
    ["Nom complet", profile.nomComplet],
    ["Âge", profile.age],
    ["Catégorie", profile.categorie],
    ["Poids", profile.poids],
    ["Taille", profile.taille],
    ["Club", profile.club],
    ["Ville", profile.ville],
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ring-700">
        <div className="absolute inset-0 bg-gradient-to-br from-blood-600/20 via-ring-950 to-ring-950" />
        <div className="container-page relative grid items-center gap-10 py-10 sm:py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blood-400">
              {profile.classe} · {profile.disciplines.join(" · ")}
            </p>
            <h1 className="break-words text-5xl leading-none sm:text-7xl">{profile.nom}</h1>
            {profile.surnom && (
              <p className="mt-2 font-display text-2xl uppercase text-zinc-400">« {profile.surnom} »</p>
            )}
            <p className="mt-6 max-w-lg text-lg text-zinc-400">{profile.citation}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/palmares" className="btn btn-primary">
                Voir le palmarès
              </Link>
              <Link href="#contact" className="btn btn-outline">
                Me contacter
              </Link>
            </div>
          </div>
          <Photo
            label={profile.photoPrincipale}
            src={profile.photoSrc}
            className="h-72 w-full rounded-2xl sm:h-96 md:h-[420px]"
          />
        </div>
      </section>

      {/* A PROPOS */}
      <section id="apropos" className="container-page py-16">
        <h2 className="section-title">À propos</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <p className="text-lg leading-relaxed text-zinc-300 md:col-span-2">{profile.bio}</p>
          <dl className="card divide-y divide-ring-700 text-sm">
            {fiche.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 px-4 py-3">
                <dt className="text-zinc-500">{label}</dt>
                <dd className="text-right text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* RESUME DU PALMARES */}
      <section id="palmares-resume" className="border-y border-ring-700 bg-ring-900/50 py-16">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">Palmarès</h2>
            <Link
              href="/palmares"
              className="text-sm font-semibold uppercase tracking-wider text-blood-400 hover:text-blood-500"
            >
              Tout le palmarès →
            </Link>
          </div>

          <div className="mt-8">
            <Stats stats={stats} />
          </div>

          {titres.length > 0 && (
            <>
              <h3 className="mt-12 text-xl text-zinc-300">Titres</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {titres.map((t) => (
                  <li key={t.id} className="card flex items-center gap-3 p-4">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <p className="font-semibold text-white">{t.titre}</p>
                      <p className="text-xs text-zinc-500">
                        {t.evenement} · {t.poids}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}

          <h3 className="mt-12 text-xl text-zinc-300">Derniers combats</h3>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recents.map((f) => (
              <FightCard key={f.id} f={f} />
            ))}
          </div>
        </div>
      </section>

     {/* GALERIE 
      <section id="galerie" className="container-page py-16">
        <h2 className="section-title">Galerie</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {profile.galerie.map((g) => (
            <figure key={g.legende}>
              <Photo label={g.image} src={g.src} className="h-56 w-full rounded-lg" />
              <figcaption className="mt-2 text-xs text-zinc-500">{g.legende}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      */}

      {/* CONTACT */}
      <section id="contact" className="container-page pb-8">
        <div className="card p-5 text-center sm:p-8">
          <h2 className="section-title inline-block text-left">Contact</h2>
          <p className="mx-auto mt-6 max-w-xl text-zinc-400">
            Sponsoring, organisation de combats, entraînement ou presse : contactez {profile.nom}.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.contact.email}`} className="btn btn-primary w-full break-all sm:w-auto">
              {profile.contact.email}
            </a>
            <a
              href={`tel:${profile.contact.telephone.replace(/\s/g, "")}`}
              className="btn btn-outline w-full sm:w-auto"
            >
              {profile.contact.telephone}
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-zinc-500">
  <a
    href={profile.contact.instagram}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="transition-colors hover:text-pink-500"
  >
    <FaInstagram className="h-10 w-10" />
  </a>

  <a
    href={profile.contact.facebook}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="transition-colors hover:text-blue-600"
  >
    <FaFacebook className="h-10 w-10" />
  </a>

  <a
    href={profile.contact.tiktok}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
    className="transition-colors hover:text-black"
  >
    <FaTiktok className="h-10 w-10" />
  </a>
</div>
        </div>
      </section>
    </>
  );
}
