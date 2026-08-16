import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Local Business Demo Studio",
    short_name: "Demo Studio",
    description: "Premium website demos for local businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3ed",
    theme_color: "#f6f3ed",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
