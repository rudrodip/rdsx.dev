import { tils } from "#site/content";
import { MDXContentRenderer } from "@/components/mdx/mdx-content-renderer";

export default function TIL() {
  const tilsSorted = tils.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="mt-10 max-w-2xl">
      {tilsSorted.map((til, i) => {
        return (
          <div key={til.slugAsParams} className="relative pb-12">
            <span className="w-2 h-2 rounded-full bg-primary absolute top-3 -translate-y-1/2 left-2 -translate-x-1/2"></span>
            {i != tils.length - 1 && (
              <div className="w-[2px] h-full absolute top-3 left-2 -translate-x-1/2 bg-primary -z-10"></div>
            )}
            <span className="text-sm ml-5 px-2 py-1 rounded bg-secondary">
              {new Date(til.date).toLocaleDateString()}
            </span>
            <div className="ml-7">
              <MDXContentRenderer code={til.body} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
