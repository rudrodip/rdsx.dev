import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { LineElement } from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { allTagNames, allTagSlugs } from "@/lib/contentlayer";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

export const letters = defineCollection({
  name: "Letters",
  pattern: "letters/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999),
      date: s.isodate(),
      published: s.boolean().default(true),
      tags: s.array(s.string()),
      body: s.mdx(),
      image: s.image(),
      imageDark: s.image(),
      toc: s.toc(),
      author: s.string(),
    })
    .transform(computedFields),
});

export const pages = defineCollection({
  name: "Page",
  pattern: "pages/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export const tils = defineCollection({
  name: "TIL",
  pattern: "tils/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      date: s.isodate(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export const authors = defineCollection({
  name: "Author",
  pattern: "author/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      name: s.string(),
      image: s.image(),
      link: s.string().optional(),
    })
    .transform(computedFields),
});

export const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string(),
      description: s.string(),
      date: s.isodate(),
      tags: s.array(s.string()),
      body: s.mdx(),
      image: s.image(),
      imageDark: s.image().optional(),
      links: s.array(
        s.object({
          name: s.string(),
          url: s.string().url(),
        })
      ),
    })
    .transform(computedFields),
});

//----------------------
// Define the Series schema
const Series = s.object({
  title: s.string(),
  order: s.number(),
}).optional();

// Define the Tag schema
const Tag = s.object({
  title: s.enum(allTagNames),
  slug: s.enum(allTagSlugs),
}).optional();
//----------------------

export const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string(),
      publishedAt: s.isodate(),
      description: s.string().max(999).optional(),
      status: s.enum(["draft", "published"]),
      series: Series,
      tags: Tag,
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { letters, authors, pages, tils, projects, posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node: LineElement) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: LineElement) {
            node.properties.className?.push("line--highlighted");
          },
          onVisitHighlightedWord(node: LineElement) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [remarkMath, remarkGfm],
  },
});
