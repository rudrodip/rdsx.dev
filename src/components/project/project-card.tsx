"use client";

import type { Project } from "@/types";
import { ExternalLink, StepForward } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex p-3 justify-between gap-2 rounded-2xl border border-b-8 overflow-hidden">
      <div className="space-y-2 w-full tablet:w-3/5">
        <Link
          href={`/projects/${project.slugAsParams}`}
          className="inline-flex items-center gap-1 group/link"
        >
          <h1 className="text-xl font-semibold">{project.title}</h1>
          <span className="-translate-x-1 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-100 ease-in-out">
            <StepForward size={12} />
          </span>
        </Link>
        <p className="text-sm text-muted-foreground max-w-2xl">
          {project.description}
        </p>
        <div className="flex items-center gap-2">
          {project.tags.map((tag) => (
            <p
              key={tag}
              className="px-2 py-1 rounded-lg bg-muted text-xs cursor-pointer"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="space-x-2 h-10">
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
      <div className="w-2/5 aspect-video overflow-hidden pebble rounded-xl hidden tablet:block">
        <Link href={`/projects/${project.slugAsParams}`}>
          <Image
            src={project.image.src}
            alt={project.title}
            width={200}
            height={200}
            blurDataURL={project.image.blurDataURL}
            placeholder="blur"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
