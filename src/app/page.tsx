import Hero from "@/components/hero";
import TabSection from "@/components/tab-section";

export default function Home() {
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <div className="w-full lg:w-2/5 p-5 md:p-8">
          <Hero />
        </div>
        <div id="tab-section" className="w-full lg:h-full lg:w-3/5 p-5 md:p-8 lg:overflow-y-scroll">
          <TabSection />
        </div>
      </div>
    </main>
  );
}
