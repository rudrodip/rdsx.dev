import { projects } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";
import { ChevronLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projects.find((project) => project.slugAsParams === slug);
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className="relative my-16">
      <Link
        href="/"
        className="absolute top-0 left-0 -translate-x-[150%] p-3 group/back inline-flex items-center text-xs"
      >
        <ChevronLeft
          size={16}
          className="group-hover/back:-translate-x-1 transition-all duration-100 ease-in-out"
        />
        <span>Go back</span>
      </Link>
      <Image
        src={project.image.src}
        alt={project.title}
        width={900}
        height={510}
        blurDataURL={project.image.blurDataURL}
        placeholder="blur"
        className="rounded-2xl border border-b-8"
      />
      <h1 className="head-text-md p-1 mt-6 mb-3">{project.title}</h1>
      <p className="border-l-4 rounded-xl p-1 pl-3">{project.description}</p>
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
      <MDXContentRenderer code={project.body} />
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
    </section>
  );
}
