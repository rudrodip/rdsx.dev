import { projects } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Picture from "@/components/picture";
import { IconMap } from "@/components/icon-map";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

function getProjectFromParam(params: { slug: string }) {
  const slug = params.slug;
  const project = projects.find((project) => project.slugAsParams === slug);

  if (!project) {
    null;
  }
  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectFromParam(params);

  if (!project) {
    return {};
  }

  const ogUrl = new URL(`${siteConfig.siteUrl}${project.image.src}`);
  ogUrl.searchParams.set("heading", project.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `${project.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: project.description,
    keywords: [...project.tags, ...siteConfig.keywords, project.title],
    openGraph: {
      title: `${project.title} | ${siteConfig.name} | ${siteConfig.creator.name}`,
      description: project.description,
      type: "article",
      url: `${siteConfig.siteUrl}/projects/${project.slugAsParams}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  return projects.map((project) => ({
    slug: project.slugAsParams,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectFromParam(params);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <div className="relative w-full lg:w-2/5 p-2 md:p-8">
          <div className="flex justify-between mb-2">
            <Link href="/" className="group/back text-xs">
              <ArrowLeft
                size={18}
                className="group-hover/back:-translate-x-1 transition-transform transform-gpu duration-100 ease-in-out"
              />
              <span className="sr-only">rdsx.dev</span>
            </Link>
            <p className="px-2 py-1 text-xs rounded bg-secondary">
              {new Date(project.date).toDateString()}
            </p>
          </div>
          <Picture
            image={project.image}
            imageDark={project.imageDark}
            width={600}
            height={400}
            alt={project.title}
            className="border rounded-xl mx-auto"
          />
          <h1 className="head-text-sm py-1 mt-6 mb-4">{project.title}</h1>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  className="social-link"
                >
                  {IconMap[link.name.toLowerCase() as keyof typeof IconMap]}
                  <span className="sr-only">
                    {`${link.name} - ${link.url}`}
                  </span>
                </a>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <p
                  key={tag}
                  className="text-xs p-1 rounded bg-secondary cursor-pointer"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <p className="rounded mb-4">
            {project.description}
          </p>
        </div>
        <div
          id="tab-section"
          className="relative w-full lg:h-full lg:w-3/5 p-2 md:p-8 overflow-y-scroll"
        >
          <MDXContentRenderer code={project.body} />
        </div>
      </div>
    </main>
  );
}
