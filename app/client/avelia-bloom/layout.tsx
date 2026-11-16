import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avelia Bloom — Carry Love, Carry Vibe",
  description:
    "Explore the Avelia Bloom printed canvas tote collection: Black Vibes, Double Take, Beige Mood and Vibe It Your Way.",
  openGraph: {
    title: "Avelia Bloom — Carry Love, Carry Vibe",
    description:
      "Thoughtful prints, easy everyday carry and a little piece of your personality.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avelia Bloom — Carry Love, Carry Vibe",
    description:
      "Thoughtful prints, easy everyday carry and a little piece of your personality.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AveliaBloomLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
