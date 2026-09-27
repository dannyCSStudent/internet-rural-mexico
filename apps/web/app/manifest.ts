import type { MetadataRoute } from "next";

import { siteUrl } from "./site-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Internet Rural México",
    short_name: "Internet Rural",
    description:
      "Información independiente para comparar opciones de Internet rural en México.",
    start_url: siteUrl,
    display: "standalone",
    background_color: "#F7F5EF",
    theme_color: "#24523A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
