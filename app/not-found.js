import Link from "next/link";

export const metadata = { title: "Page introuvable" };

export default function NotFound() {
  return (
    <section className="container-page py-32 text-center">
      <p className="font-display text-8xl text-blood-500">404</p>
      <h1 className="mt-4 text-3xl">Page introuvable</h1>
      <Link href="/" className="btn btn-primary mt-8">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
