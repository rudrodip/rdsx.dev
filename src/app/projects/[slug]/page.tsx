import { projects } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { ChevronLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import Picture from "@/components/picture";
import { ExternalLink } from "lucide-react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projects.find((project) => project.slugAsParams === slug);
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <main className="w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <div className="relative w-full lg:w-2/5 p-2 md:p-8">
        <Link href="/" className="absolute top-2 left-1 md:top-8 md:left-2 group/back text-xs">
          <ChevronLeft size={20} />
        </Link>
          <Picture
            image={project.image}
            imageDark={project.imageDark}
            alt={project.title}
            className="border border-b-8 rounded-xl"
          />
          <h1 className="head-text-md p-1 mt-6 mb-3">{project.title}</h1>
          <p className="border-l-4 rounded-xl p-1 pl-3">
            {project.description}
          </p>
          <div className="space-x-2 h-10 my-4">
            {project.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                className="p-2 text-xs inline-flex gap-1 items-center rounded-lg pebble"
              >
                <span>{link.name}</span>
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
        <div
          id="tab-section"
          className="w-full lg:h-full lg:w-3/5 p-2 md:p-8 lg:overflow-y-scroll"
        >
          <MDXContentRenderer code={project.body} />
        </div>
      </div>
    </main>
  );
}
