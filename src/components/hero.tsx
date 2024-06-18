import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/theme-toggler";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            <Link href="/feed">
              <Rss size={18} />
            </Link>
          </Button>
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2">{portfolioConfig.tagline}</h3>
      <p className="my-6 max-w-2xl">{portfolioConfig.bio}</p>
      <Socials />
      <div className="mt-16 space-y-2 rounded-lg border-l-4 py-2 pl-4 max-w-2xl text-muted-foreground">
        <p>
          <span className="font-semibold text-primary/90">Frontend:</span>{" "}
          React, Next.js, Tailwindcss, Framer motion
        </p>
        <p>
          <span className="font-semibold text-primary/90">Backend:</span>{" "}
          Hono.js, Express.js, Fastapi, Fiber, Mux
        </p>
        <p>
          <span className="font-semibold text-primary/90">Mobile:</span> React
          Native, Expo, Flutter
        </p>
        <p>
          <span className="font-semibold text-primary/90">Web3:</span> Solana,
          Anchor, Solana Wallet Provider, Solana Mobile Wallet Provider
        </p>
        <p>
          <span className="font-semibold text-primary/90">
            Microcontroller:
          </span>{" "}
          Arduino (UNO, Nano, Micro, Mini), ESP32, ESP8266 PlatformIO, Raspberry
          Pi
        </p>
      </div>
    </>
  );
}
