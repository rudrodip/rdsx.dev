import { projects } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import Picture from "@/components/picture";
import { IconMap } from "@/components/icon-map";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projects.find((project) => project.slugAsParams === slug);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5 border-4">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <div className="relative w-full lg:w-2/5 p-2 md:p-8">
          <div className="flex justify-between mb-2">
            <Link href="/" className="group/back text-xs">
              <ArrowLeft
                size={18}
                className="group-hover/back:-translate-x-1 transition-transform transform-gpu duration-100 ease-in-out"
              />
            </Link>
            <p className="px-2 py-1 text-xs rounded bg-secondary">
              {new Date(project.date).toDateString()}
            </p>
          </div>
          <Picture
            image={project.image}
            imageDark={project.imageDark}
            alt={project.title}
            className="border border-b-8 rounded-xl"
          />
          <h1 className="head-text-sm p-1 mt-6 mb-4">{project.title}</h1>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  className="social-link"
                >
                  {IconMap[link.name.toLowerCase() as keyof typeof IconMap]}
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
          <p className="border-l-4 rounded p-1 pl-3 mb-4">
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
