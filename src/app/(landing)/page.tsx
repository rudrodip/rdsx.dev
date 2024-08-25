"use client";

import React, { useMemo, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/project/project-card";
import { Star } from "lucide-react";
import { projects } from "#site/content";
import { getRepos } from "@/components/project/action";

const schema = z.object({
  query: z.string().min(1, "Search is required"),
  type: z.enum(["Featured", "Github"]).default("Featured"),
  sort: z.enum(["Last updated", "Stars"]).default("Stars"),
});

export default function Home() {
  const [githubProjects, setGithubProjects] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      query: "",
      type: "Featured",
      sort: "Stars",
    },
  });

  const { query, type, sort } = form.watch();

  const fetchGithubRepos = useCallback(async () => {
    setLoading(true);
    try {
      const repos = await getRepos();
      setGithubProjects(repos);
    } catch (error) {
      console.error("Failed to fetch GitHub repos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchGithubRepos();
  }, [fetchGithubRepos]);

  const sortedFeaturedProjects = useMemo(() => {
    return [...projects].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  const sortedGithubProjects = useMemo(() => {
    return [...githubProjects].sort((a, b) => {
      if (sort === "Stars") {
        return b.stargazers_count - a.stargazers_count;
      }
      return (
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
    });
  }, [githubProjects, sort]);

  const filteredProjects = useMemo(() => {
    const lowercaseQuery = query.toLowerCase();
    const projectList =
      type === "Featured" ? sortedFeaturedProjects : sortedGithubProjects;

    return projectList.filter((project) => {
      const title = type === "Featured" ? project.title : project.name;
      const description = project.description || "";
      return (
        title.toLowerCase().includes(lowercaseQuery) ||
        description.toLowerCase().includes(lowercaseQuery)
      );
    });
  }, [type, query, sortedFeaturedProjects, sortedGithubProjects]);

  const renderProjects = useCallback(() => {
    if (loading && type === "Github") {
      return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          {Array(12)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="w-full h-full min-h-[90px] rounded-md border bg-muted/50 animate-pulse"
              ></div>
            ))}
        </div>
      );
    }

    if (type === "Featured") {
      return filteredProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ));
    }

    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredProjects.map((repo, index) => (
          <GithubRepo key={index} repo={repo} />
        ))}
      </div>
    );
  }, [type, filteredProjects, loading]);

  return (
    <section className="w-full space-y-6 mt-5">
      <Form {...form}>
        <form className="w-full flex items-center nav-container sticky top-14 z-20">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="rounded-lg rounded-r-none current focus-visible:ring-0 bg-background backdrop-blur-md"
                    placeholder="search projects"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center">
            {["type", "sort"].map((fieldName) => (
              <FormField
                key={fieldName}
                control={form.control}
                name={fieldName as "type" | "sort"}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={cn(
                            "p-2 min-w-16 lg:min-w-24 text-center text-sm hover:bg-secondary cursor-pointer border-0 border-t-[0.5px] bg-background transition-all duration-100 ease-out",
                            "nav-item hover:bg-background rounded-none gap-1",
                            fieldName === "sort" && "rounded-r-lg"
                          )}
                        >
                          {field.value}
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {fieldName === "type" ? (
                          <>
                            <SelectItem value="Featured">Featured</SelectItem>
                            <SelectItem value="Github">Github</SelectItem>
                          </>
                        ) : (
                          <>
                            <SelectItem value="Last updated">
                              Last updated
                            </SelectItem>
                            <SelectItem value="Stars">Stars</SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </form>
      </Form>
      {renderProjects()}
    </section>
  );
}

const GithubRepo = React.memo(({ repo }: { repo: any }) => (
  <a
    href={repo.html_url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full h-full min-h-[90px] flex flex-col rounded-lg p-2 border text-sm hover:shadow-md"
  >
    <h1>{repo.name}</h1>
    <p className="flex-1 text-xs text-muted-foreground">{repo.description}</p>
    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
      <p>{repo.language}</p>
      {repo.stargazers_count > 0 && (
        <p className="flex items-center gap-px text-foreground">
          <Star size={12} />
          {repo.stargazers_count}
        </p>
      )}
      {repo.forks > 0 && <p>{repo.forks} forks</p>}
    </div>
  </a>
));

GithubRepo.displayName = "GithubRepo";
