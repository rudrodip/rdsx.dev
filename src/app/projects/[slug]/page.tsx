import { projects } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";

export default function ProjectPage({ params }: { params: { slug: string} }) {
  const slug = params.slug;
  const project = projects.find((project) => project.slugAsParams === slug);
  if (!project) {
    return <p>Project not found</p>
  }

  return (
    <section>
      <p>{slug}</p>
      <MDXContentRenderer code={project.body} />
    </section>
  )
}