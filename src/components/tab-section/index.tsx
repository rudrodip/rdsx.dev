import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Projects from "./project-section";
import Experience from "./experience-section";
import BlogSection from "./blog-section";
import TIL from "./til-section";

export default function TabSection() {
  return (
    <Tabs defaultValue="projects" className="relative w-full">
      <TabsList className="sticky top-5 sm:top-0 py-5 gap-1">
        <TabsTrigger value="projects" className="pebble">
          Projects
        </TabsTrigger>
        <TabsTrigger value="experience" className="pebble">
          Experience
        </TabsTrigger>
        <TabsTrigger value="blogs" className="pebble">
          Blogs
        </TabsTrigger>
        <TabsTrigger value="til" className="pebble">
          TIL
        </TabsTrigger>
      </TabsList>
      <TabsContent value="projects" className="w-full">
        <Projects />
      </TabsContent>
      <TabsContent value="experience" className="w-full">
        <Experience />
      </TabsContent>
      <TabsContent value="blogs" className="w-full">
        <BlogSection />
      </TabsContent>
      <TabsContent value="til" className="w-full">
        <TIL />
      </TabsContent>
    </Tabs>
  );
}
