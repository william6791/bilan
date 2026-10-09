import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilan : le bilan mensuel envoyé sans y penser",
  description:
    "Saisissez vos chiffres du mois en une minute. Bilan met en page le rapport à vos couleurs et l'envoie à vos clients, chaque 1er du mois.",
  openGraph: {
    title: "Bilan : le bilan mensuel envoyé sans y penser",
    description:
      "Vos clients savent ce qu'ils ont eu pour leur argent, sans que vous y pensiez.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
