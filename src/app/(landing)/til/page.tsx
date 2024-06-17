import { tils } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Today I learned | ${siteConfig.name} | ${siteConfig.creator.name}`,
  description: `A list of things I learned today | Hey, I'm ${siteConfig.creator.name} and this is a journal of things I learned. I keep it as a reminder of the things I've learned and to share it with others.`,
  keywords: [...siteConfig.keywords, "TIL", "Today I learned"],
  openGraph: {
    title: `Today I learned | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: `A list of things I learned today | Hey, I'm ${siteConfig.creator.name} and this is a journal of things I learned. I keep it as a reminder of the things I've learned and to share it with others.`,
    type: "website",
    url: `${siteConfig.siteUrl}/til`,
    images: [
      {
        url: `${siteConfig.siteUrl}/til-og.png`,
        width: 1800,
        height: 1000,
        alt: `Today I learned | ${siteConfig.name} | ${siteConfig.creator.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.creator.url,
    title: `Today I learned | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: `A list of things I learned today | Hey, I'm ${siteConfig.creator.name} and this is a journal of things I learned. I keep it as a reminder of the things I've learned and to share it with others.`,
    images: {
      url: `${siteConfig.siteUrl}/til-og.png`,
      width: 1800,
      height: 1000,
      alt: `Today I learned | ${siteConfig.name} | ${siteConfig.creator.name}`,
    },
  },
};

export default function TIL() {
  const tilsSorted = tils.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="mt-10 max-w-2xl">
      {tilsSorted.map((til, i) => {
        return (
          <div key={til.slugAsParams} className="relative pb-12">
            <span className="w-2 h-2 rounded-full bg-primary absolute top-3 -translate-y-1/2 left-2 -translate-x-1/2"></span>
            {i != tils.length - 1 && (
              <div className="w-[2px] h-full absolute top-3 left-2 -translate-x-1/2 bg-accent -z-10"></div>
            )}
            <span className="text-sm ml-5 px-2 py-1 rounded bg-secondary">
              {new Date(til.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <div className="ml-7">
              <MDXContentRenderer code={til.body} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
