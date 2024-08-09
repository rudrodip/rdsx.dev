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
              <span className="sr-only">rss feed</span>
            </Link>
          </Button>
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">{portfolioConfig.tagline}</h3>
      <p className="my-6 max-w-2xl">{portfolioConfig.bio}</p>
      <Socials />
      <div className="text-sm mt-10 md:mt-16 space-y-2 rounded max-w-2xl text-muted-foreground">
        <p>
          <span className="font-semibold text-primary/90">Frontend:</span>{" "}
          React, Next.js, TailwindCSS, SCSS, Framer motion, GSAP, Redux, Recoil, Zustand, SWR, Tanstack Query, Tanstack Router, React Hook Form, Jest, Vitest, Cypress, Playwright, Storybook, Headless UI, ShadCN UI
        </p>
        <p>
          <span className="font-semibold text-primary/90">
            Javascript runtime:
          </span>{" "}
          Node.js, Bun, Deno, Edge runtime (Vercel), CF Worker
        </p>
        <p>
          <span className="font-semibold text-primary/90">Backend:</span>{" "}
          Hono.js, Express.js, Fastapi, Flask, Go, Fiber, Mux
        </p>
        <p>
          <span className="font-semibold text-primary/90">Mobile:</span> React
          Native, Expo, Flutter, RN MMKV, RN Reanimated, RN Gesture Handler, RN BLE, Flutter BLE
        </p>
        <p>
          <span className="font-semibold text-primary/90">Web3:</span> Solana,
          Anchor, Solana Wallet Provider, Solana Mobile Wallet Provider,
          Ethereum, Web3.js
        </p>
        <p>
          <span className="font-semibold text-primary/90">Firmware:</span> C,
          C++, Rust, Python, Micropython
        </p>
        <p>
          <span className="font-semibold text-primary/90">Firmware IDE:</span>{" "}
          Arduino IDE, PlatformIO, ROS
        </p>
        <p>
          <span className="font-semibold text-primary/90">Hardware:</span>{" "}
          Arduino (UNO, Nano, Micro, Mini), ESP32, ESP8266, Raspberry Pi Pico, Raspberry Pi (Zero, ZeroW, 3, 4) 
        </p>
      </div>
    </>
  );
}
