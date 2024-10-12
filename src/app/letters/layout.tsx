import type { Metadata } from "next/types";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `Letters | ${siteConfig.name}`,
  description:
    "Letters | jagadeshronanki.com | Welcome to my little corner of the internet, where I’m here to talk and mock you all. Just a nobody trying to make sense of it all — join me if you dare.",
  keywords: siteConfig.keywords,

  // Open Graph metadata
  openGraph: {
    title: `Letters | ${siteConfig.name}`,
    description:
      "Letters | jagadeshronanki.com | Welcome to my little corner of the internet, where I’m here to talk and mock you all. Just a nobody trying to make sense of it all — join me if you dare.",
    url: `${siteConfig.siteUrl}/letters`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.siteUrl}/letter-og.png`,
        width: 1800,
        height: 1000,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: siteConfig.creator.url,
    title: `Letters | ${siteConfig.name}`,
    description:
      "Letters | jagadeshronanki.com | Welcome to my little corner of the internet, where I’m here to talk and mock you all. Just a nobody trying to make sense of it all — join me if you dare.",
    images: {
      url: `${siteConfig.siteUrl}/letter-og.png`,
      width: 1800,
      height: 1000,
      alt: `Letters | ${siteConfig.name}`,
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <section>{children}</section>
    </main>
  );
}
