# Portfolio website

It's a portfolio website with static blog posts written in MDX format.

## Features

- MDX blog posts
- Dark mode
- SEO friendly
- Responsive design
- Sitemap
- Analytics
- RSS feeds

## Tech Stack

- **Language**: TypeScript
- **Framework**: Next 14
- **Styling**: Tailwind CSS
- **UI Components**: [ShadCN](https://ui.shadcn.com)
- **Content**: MDX
- **Content Management**: Github
- **Content Generation**: [Velite](https://velite.js.org/)
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics, Vercel Speed Analytics

I'm using a [view transition lib](https://github.com/shuding/next-view-transitions) for this website. It's a simple and lightweight library that provides a smooth transition between pages by [Shu Ding](https://x.com/shuding_)

## Development

```bash
# fork the repo & clone it
git clone https://github.com/your-username/rdsx.dev

# install dependencies
bun install

# run the development server
bun dev

# run velite dev server
bun velite dev
```

Configure `velite.config.ts` to add or modify your collection of content

Write your blog posts, projects, tils in the `content` directory.

```bash
 root
+├── content
+│   ├── blogs
+│   │   └── hello-world.mdx
+│   ├── projects
+│   │   └── project.mdx
+│   ├── tils
+│   │   └── til.mdx
+│   └── others
+│       └── other.yml
 ├── public
 ├── package.json
 └── velite.config.ts
```

Read the [velite docs](https://velite.js.org/guide/quick-start) for more information on how to use it.

## License

[GNU AFFERO GENERAL PUBLIC LICENSE](LICENSE)
