import { blogs } from "#velite";
import { z } from "velite";
import Picture from "@/components/picture";
import { Link } from "next-view-transitions";

export default function BlogCard({
  blog,
}: {
  blog: z.infer<typeof blogs.schema>;
}) {
  return (
    <Link href={`/blogs/${blog.slugAsParams}`}>
      <div className="w-full h-full max-w-lg rounded-xl overflow-hidden border hover:border-primary duration-100 transition-all ease-in-out">
        <Picture
          image={blog.image}
          imageDark={blog.imageDark}
          width={200}
          height={150}
          alt={blog.title}
          className="rounded-t-xl w-full"
        />
        <div className="p-3">
          <h1 className="text-xl font-semibold font-heading">{blog.title}</h1>
          <div className="flex items-center gap-2 flex-wrap mt-2">
            {blog.tags.map((tag) => (
              <p
                key={tag}
                className="px-2 py-1 rounded-lg bg-muted text-xs cursor-pointer"
              >
                {tag}
              </p>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {blog.description}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {new Date(blog.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
