import { Feed } from "feed";
import { siteConfig } from "@/config/site.config";
import { letters } from "#site/content";
import fs from "fs";

export default async function generateRssFeed() {
  const site_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : siteConfig.siteUrl;

  const feedOptions = {
    title: `Letters | ${siteConfig.name}`,
    description:
      "Hi, I’m Jagadesh Ronanki. I’m nobody, just like you, and I help you recognize that. In a society fixated on status and wealth, I challenge the notion that they hold any real value. I believe that awareness and introspection are the keys to understanding our place in this world. Let's explore the idea that greed and ambition aren't the real threats to humanity, but rather the distractions that keep us from our true selves.",
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.creator.name}`,
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  letters.map((letter) => {
    feed.addItem({
      title: letter.title,
      description: letter.description,
      link: `${site_url}/blogs/${letter.slugAsParams}`,
      guid: letter.slugAsParams,
      date: new Date(letter.date),
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.rss2());
  fs.writeFileSync("./public/rss.json", feed.json1());
  fs.writeFileSync("./public/atom.xml", feed.atom1());
}

generateRssFeed().catch((err) => console.log(err));
