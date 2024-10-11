import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/theme-toggler";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { skillsConfig } from "@/config/skills.config";

export default function Hero() {
  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            <Link href="/feed">
              <Rss size={18} />
              <span className="sr-only">rss feed</span>
            </Link>
          </Button>
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">
        {portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
      <p className="my-6 max-w-2xl text-foreground/80">
        I&apos;m currently working as a .NET Developer at{" "}
        <a
          href="https://Idontwannasay.in"
          target="_blank"
          className="text-foreground font-semibold hover:underline"
        >
          super exciting
        </a>
        &nbsp;MNC because spending my days writing code is the dream, right?
        I&apos;m also the founder of{" "}
        <a
          href="/"
          target="_blank"
          className="text-foreground font-semibold hover:underline"
        >
          Me
        </a>{" "}
        - where I share just how confused I am about life. Good Times!
        <span className="sr-only">bio</span>
      </p>
      <Socials />
      <div className="border-t-[0.8px] mt-[2rem]"></div>
      <div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
        {skillsConfig.map((skill) => (
          <p key={skill.category}>
            <span className="font-semibold text-primary/90">
              {skill.category}:
            </span>{" "}
            {skill.technologies.join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
}
