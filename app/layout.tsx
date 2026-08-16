import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Business Demo Studio",
  description: "Premium website demos designed for local and small businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
