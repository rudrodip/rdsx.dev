import { Button } from "@/components/ui/button";
import { portfolioConfig } from "@/config/portfolio.config";
import { siteConfig } from "@/config/site.config";
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen p-0 sm:p-5">
      <div className="w-full h-full rounded-2xl sm:border flex flex-wrap justify-between lg:divide-x">
        <div className="w-full lg:w-2/5 p-5 md:p-8">
          <Link href="/">
            <p className="font-mono text-sm underline">{siteConfig.name}</p>
          </Link>
          <h1 className="head-text-sm mt-6">{portfolioConfig.name}</h1>
          <h3 className="mt-2">{portfolioConfig.tagline}</h3>
          <p className="my-6 max-w-2xl">{portfolioConfig.bio}</p>
          <Socials />
          <div className="text-sm mt-16 space-y-1 rounded border-l-4 pl-2 max-w-2xl">
            <p>
              <span className="font-semibold">Frontend:</span> React, Next.js, Tailwindcss, Framer motion
            </p>
            <p>
              <span className="font-semibold">Backend:</span> Hono.js, Express.js, Fastapi, Fiber, Mux
            </p>
            <p>
              <span className="font-semibold">Mobile:</span> React Native, Expo, Flutter
            </p>
            <p>
              <span className="font-semibold">Web3:</span> Solana, Anchor, Solana Wallet Provider, Solana Mobile Wallet Provider
            </p>
            <p>
              <span className="font-semibold">Microcontroller:</span> Arduino (UNO, Nano, Micro, Mini), ESP32, ESP8266 PlatformIO, Raspberry Pi
            </p>
          </div>
        </div>
        <div className="w-full lg:w-3/5 p-5 md:p-8 overflow-y-scroll">
        </div>
      </div>
    </main>
  );
}

const Socials = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        size="sm"
        className="shadow-none hover:bg-background hover:text-primary border border-transparent hover:border hover:border-b-4 hover:border-primary/30 transition-all"
      >
        <a href="https://cal.com/rds_agi" target="_blank">
          Schedule a call
        </a>
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="border-b-4 active:border-b active:scale-[0.97] hover:border-primary/30 hover:bg-background shadow-none"
      >
        <a
          href="https://raw.githubusercontent.com/rudrodip/rudrodip/main/resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </Button>
      <a href={portfolioConfig.links.x} target="_blank" className="social-link">
        <TwitterLogoIcon />
      </a>
      <a
        href={portfolioConfig.links.github}
        target="_blank"
        className="social-link"
      >
        <GitHubLogoIcon />
      </a>
      <a
        href={portfolioConfig.links.discord}
        target="_blank"
        className="social-link"
      >
        <DiscordLogoIcon />
      </a>
      <a
        href={portfolioConfig.links.linkedin}
        target="_blank"
        className="social-link"
      >
        <LinkedInLogoIcon />
      </a>
    </div>
  );
};
