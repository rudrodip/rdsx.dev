export default function ProjectPage() {
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5 border-4">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <div className="relative w-full lg:w-2/5 p-2 md:p-8">
        </div>
        <div
          id="tab-section"
          className="relative w-full lg:h-full lg:w-3/5 p-2 md:p-8 overflow-y-scroll"
        >
        </div>
      </div>
    </main>
  );
}
