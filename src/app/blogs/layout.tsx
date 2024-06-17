import type { Metadata } from "next/types";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: `Blogs | ${siteConfig.name}`,
  description:
    "Blogs | rdsx.dev | Hey! I am RDS (Rudro Dip Sarker), and its my personal blog where I share my learnings, experiences, and thoughts on different topics. I mostly talk about tech, but I don't have any specific niche.  I write about whatever I find interesting. I hope you will find my blogs helpful. Happy reading!",
  keywords: siteConfig.keywords,

  // Open Graph metadata
  openGraph: {
    title: `Blogs | ${siteConfig.name}`,
    description:
      "Blogs | rdsx.dev | Hey! I am RDS (Rudro Dip Sarker), and its my personal blog where I share my learnings, experiences, and thoughts on different topics. I mostly talk about tech, but I don't have any specific niche.  I write about whatever I find interesting. I hope you will find my blogs helpful. Happy reading!",
    url: `${siteConfig.siteUrl}/blogs`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.siteUrl}/blog-og.png`,
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
    title: `Blogs | ${siteConfig.name}`,
    description:
      "Blogs | rdsx.dev | Hey! I am RDS (Rudro Dip Sarker), and its my personal blog where I share my learnings, experiences, and thoughts on different topics. I mostly talk about tech, but I don't have any specific niche.  I write about whatever I find interesting. I hope you will find my blogs helpful. Happy reading!",
    images: {
      url: `${siteConfig.siteUrl}/blog-og.png`,
      width: 1800,
      height: 1000,
      alt: `Blogs | ${siteConfig.name}`,
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
