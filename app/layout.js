import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/lib/stats";

export const metadata = {
  title: {
    default: `${profile.nom}`,
    template: `%s · ${profile.nom}`,
  },
  description: `${profile.nom} — combattant ${profile.classe} en ${profile.disciplines.join(" et ")}.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Oswald:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header nom={profile.nom} />
        <main>{children}</main>
        <Footer nom={profile.nom} disciplines={profile.disciplines} />
      </body>
    </html>
  );
}
