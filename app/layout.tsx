import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://local-business-demo-studio.vercel.app"),
  title: {
    default: "Local Business Demo Studio | Website Concepts for Local Businesses",
    template: "%s | Local Business Demo Studio",
  },
  description: "Premium, conversion-focused website demos designed for restaurants, salons, gyms, clinics, coaching institutes and other local businesses.",
  applicationName: "Local Business Demo Studio",
  keywords: ["local business website", "small business website", "restaurant website", "salon website", "business website demos"],
  openGraph: {
    title: "Local Business Demo Studio",
    description: "Explore premium website concepts built for local businesses.",
    type: "website",
    siteName: "Local Business Demo Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Business Demo Studio",
    description: "Premium website demos for local businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f6f3ed",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
