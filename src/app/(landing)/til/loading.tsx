export default function Loading() {
  return (
    <div className="mt-10 max-w-2xl">
      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <div key={i} className="relative pb-12">
            <span className="w-2 h-2 rounded-full bg-primary absolute top-3 -translate-y-1/2 left-2 -translate-x-1/2"></span>
            {i != 2 && (
              <div className="w-[2px] h-full absolute top-3 left-2 -translate-x-1/2 bg-accent -z-10"></div>
            )}
            <div className="text-sm ml-5 w-32 h-8 px-2 py-1 rounded bg-secondary animate-pulse">
            </div>
            <div className="ml-7 space-y-2 mt-5">
              <div className="w-52 h-8 rounded-lg bg-muted animate-pulse"></div>
              <div className="w-52 h-8 rounded-lg bg-muted animate-pulse"></div>
              <div className="w-52 h-8 rounded-lg bg-muted animate-pulse"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
