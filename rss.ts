import { Feed } from 'feed';
import { siteConfig } from "@/config/site.config";
import { blogs } from "#site/content";
import fs from "fs";

export default async function generateRssFeed() {
  const site_url = process.env.NODE_ENV === "development" ? "http://localhost:3000" : siteConfig.siteUrl;

  const feedOptions = {
    title: `Blogs | ${siteConfig.name}`,
    description: "Hey! I am RDS (Rudro Dip Sarker), and its my personal blog where I share my learnings, experiences, and thoughts on different topics. I mostly talk about tech, but I don't have any specific niche.  I write about whatever I find interesting. I hope you will find my blogs helpful. Happy reading!",
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
      atom: `${site_url}/atom.xml`
    }
   };

  const feed = new Feed(feedOptions);

  blogs.map(blog => {
    feed.addItem({
      title: blog.title,
      description: blog.description,
      link: `${site_url}/blogs/${blog.slugAsParams}`,
      guid: blog.slugAsParams,
      date: new Date(blog.date),
    });
  })

  fs.writeFileSync('./public/rss.xml', feed.rss2());
  fs.writeFileSync('./public/rss.json', feed.json1());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
}

generateRssFeed().catch(err => console.log(err));