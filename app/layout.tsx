import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://local-business-demo-blue.vercel.app";
const RDS_LOGO_URL = "https://raw.githubusercontent.com/rahul-dev-web/Rahul-Dev-Studio/main/public/brand/logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    images: [{ url: RDS_LOGO_URL, width: 768, height: 768, alt: "Rahul Development Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Business Demo Studio",
    description: "Premium website demos for local businesses.",
    images: [RDS_LOGO_URL],
  },
  icons: { icon: RDS_LOGO_URL, apple: RDS_LOGO_URL },
  robots: { index: true, follow: true },
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
