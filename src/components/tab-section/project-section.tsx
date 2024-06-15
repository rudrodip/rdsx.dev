import { projects } from "#site/content"
import ProjectCard from "@/components/project/project-card"

export default function Projects() {
  return (
    <div className="mt-10 space-y-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )
}