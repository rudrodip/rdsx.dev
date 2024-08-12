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
      <h3 className="mt-2 text-lg">
        {portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
      <p className="my-6 max-w-2xl text-foreground/80">
        Hey 👋 RDS here! I&apos;m currently working as a software engineer at{" "}
        <a
          href="https://radicalhealth.in"
          target="_blank"
          className="text-foreground font-semibold hover:underline"
        >
          Radical Health
        </a>
        . I&apos;m also the founder of{" "}
        <a
          href="https://sonicrypt.rdsx.dev"
          target="_blank"
          className="text-foreground font-semibold hover:underline"
        >
          Sonicrypt
        </a>{" "}
        - world&apos;s first blockchain sonification device.
        <span className="sr-only">bio</span>
      </p>
      <Socials />
      <div className="text-sm mt-10 space-y-2 rounded max-w-2xl text-foreground/70">
        <p>
          <span className="font-semibold text-primary/90">Frontend:</span>{" "}
          React, Next.js, TailwindCSS, SCSS, Headless UI, ShadCN UI, Framer
          motion, GSAP, Redux, Recoil, Zustand, SWR, Tanstack Query, Tanstack
          Router, React Hook Form, Jest, Vitest, Cypress, Playwright, Storybook
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
          Native, Expo, Flutter, RN MMKV, RN Reanimated, RN Gesture Handler, RN
          BLE, Flutter BLE
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
          Arduino (UNO, Nano, Micro, Mini), ESP32, ESP8266, Raspberry Pi Pico,
          Raspberry Pi (Zero, ZeroW, 3, 4)
        </p>
      </div>
    </>
  );
}
