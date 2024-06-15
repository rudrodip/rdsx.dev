import { projects } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";

export default function ProjectPage({ params }: { params: { id: string} }) {
  const id = params.id;
  const project = projects.find((project) => project.slugAsParams === id);
  if (!project) {
    return <p>Project not found</p>
  }

  return (
    <section>
      <p>{id}</p>
      <MDXContentRenderer code={project.body} />
    </section>
  )
}