import { blogs } from "#site/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Picture from "@/components/picture";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { DashboardTableOfContents } from "@/components/mdx/toc";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

type BlogPageParams = {
  params: {
    slug: string;
  };
};

function getBlogFromParam(params: { slug: string }) {
  const slug = params.slug;
  const blog = blogs.find((blog) => blog.slugAsParams === slug);

  if (!blog) {
    null;
  }
  return blog;
}

export async function generateMetadata({
  params,
}: BlogPageParams): Promise<Metadata> {
  const blog = getBlogFromParam(params);

  if (!blog) {
    return {};
  }

  const ogUrl = new URL(`${siteConfig.siteUrl}${blog.image.src}`);
  ogUrl.searchParams.set("heading", blog.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `${blog.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: blog.description,
    keywords: [...blog.tags, ...siteConfig.keywords, blog.title],
    openGraph: {
      title: `${blog.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
      description: blog.description,
      type: "article",
      url: `${siteConfig.siteUrl}/blogs/${blog.slugAsParams}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | ${siteConfig.name}`,
      description: blog.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  BlogPageParams["params"][]
> {
  return blogs.map((blog) => ({
    slug: blog.slugAsParams,
  }));
}

export default async function BlogPost({ params }: BlogPageParams) {
  const blog = getBlogFromParam(params);
  if (!blog) {
    notFound();
  }

  return (
    <article className="relative max-w-3xl px-2 lg:px-0 py-6 lg:py-16">
      <Link
        href="/blogs"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden lg:inline-flex"
        )}
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        See all blogs
      </Link>
      <p className="px-2 py-1 rounded text-xs bg-secondary inline-block">
        {new Date(blog.date).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <h1 className="head-text-sm my-3">{blog.title}</h1>
      <Picture
        image={blog.image}
        imageDark={blog.imageDark}
        alt={blog.title}
        className="w-full"
      />

      <div className="hidden text-sm min-[1400px]:inline-flex">
        <div className="fixed top-28 right-[100px] h-full z-50">
          <DashboardTableOfContents toc={blog.toc} />
        </div>
      </div>
      <div className="mx-auto w-full min-w-0">
        <MDXContentRenderer code={blog.body} />
        <hr className="my-4 md:my-6" />
      </div>
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/blogs"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          See all blogs
        </Link>
      </div>
    </article>
  );
}
