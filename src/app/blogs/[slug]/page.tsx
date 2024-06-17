import { blogs } from "#site/content";
import { notFound } from "next/navigation";
import { Link } from "next-view-transitions";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Picture from "@/components/picture";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { DashboardTableOfContents } from "@/components/mdx/toc";

export default async function BlogPost({ params }: { params: { slug: string }}) {
  const { slug } = params;
  const blog = blogs.find((blog) => blog.slugAsParams === slug);
  if (!blog) {
    notFound();
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-16">
    <Link
      href="/blogs"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute left-[-200px] top-14 hidden xl:inline-flex"
      )}
    >
      <ArrowLeftIcon className="mr-2 h-4 w-4" />
      See all blogs
    </Link>
    <p className="px-2 py-1 rounded text-xs bg-secondary inline-block">{new Date(blog.date).toLocaleString()}</p>
    <h1 className="head-text-sm my-3">{blog.title}</h1>
    <Picture
      image={blog.imageDark}
      imageDark={blog.imageDark}
      alt={blog.title}
      className="w-full rounded-xl"
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
      <Link href="/blogs" className={cn(buttonVariants({ variant: "ghost" }))}>
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        See all blogs
      </Link>
    </div>
  </article>
  )
}