import { projects } from "#velite";
import { StepForward } from "lucide-react";
import { Link } from "next-view-transitions";
import Picture from "@/components/picture";
import { IconMap } from "@/components/icon-map";
import { z } from "velite";

type ProjectCardProps = {
  project: z.infer<typeof projects.schema>;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-2xl border border-b-8 overflow-hidden">
      <div className="space-y-2 w-full tablet:w-3/5">
        <Link href={`/projects/${project.slugAsParams}`} className="space-y-2 group/link">
          <div className="inline-flex items-center gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-semibold font-heading">{project.title}</h1>
              <span className="text-xs px-2 py-1 rounded bg-secondary">
                {new Date(project.date).toDateString()}
              </span>
            </div>
            <span className="-translate-x-1 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-100 ease-in-out">
              <StepForward size={12} />
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl">
            {project.description}
          </p>
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <p
              key={tag}
              className="px-2 py-1 rounded-lg bg-muted text-xs cursor-pointer"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
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
      </div>
      <div className="w-2/5 aspect-video overflow-hidden pebble rounded-xl hidden tablet:block">
        <Link href={`/projects/${project.slugAsParams}`}>
          <Picture
            image={project.image}
            imageDark={project.imageDark}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
