import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative w-full lg:h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <div className="w-full lg:w-2/5 p-2 md:p-8 lg:h-full lg:overflow-y-scroll">
          <Hero />
        </div>
        <div
          id="tab-section"
          className="relative w-full mt-3 max-w-4xl mx-auto lg:mt-0 lg:h-full lg:w-3/5 p-2 md:p-8 lg:overflow-y-scroll"
        >
          <Navbar />
          {children}
        </div>
      </div>
    </main>
  );
}
