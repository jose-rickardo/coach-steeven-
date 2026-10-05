"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/palmares", label: "Palmarès" },
  { href: "/#contact", label: "Contact" },
];

export default function Header({ nom }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ring-700 bg-ring-950/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-2xl uppercase tracking-widest text-white">
          {nom}
          <span className="text-blood-500">.</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ring-700 text-zinc-300 sm:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <ul
          id="menu"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col border-b border-ring-700 bg-ring-950 px-4 py-2 text-sm font-semibold uppercase tracking-wider sm:static sm:flex sm:flex-row sm:items-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-3 transition sm:py-0 ${
                  pathname === l.href ? "text-blood-400" : "text-zinc-400 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
