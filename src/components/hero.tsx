import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Link href="/">
        <p className="font-mono text-sm underline">{siteConfig.name}</p>
      </Link>
      <h1 className="head-text-sm mt-6">{portfolioConfig.name}</h1>
      <h3 className="mt-2">{portfolioConfig.tagline}</h3>
      <p className="my-6 max-w-2xl">{portfolioConfig.bio}</p>
      <Socials />
      <div className="text-sm mt-16 space-y-1 rounded border-l-4 pl-2 max-w-2xl">
        <p>
          <span className="font-semibold">Frontend:</span> React, Next.js,
          Tailwindcss, Framer motion
        </p>
        <p>
          <span className="font-semibold">Backend:</span> Hono.js, Express.js,
          Fastapi, Fiber, Mux
        </p>
        <p>
          <span className="font-semibold">Mobile:</span> React Native, Expo,
          Flutter
        </p>
        <p>
          <span className="font-semibold">Web3:</span> Solana, Anchor, Solana
          Wallet Provider, Solana Mobile Wallet Provider
        </p>
        <p>
          <span className="font-semibold">Microcontroller:</span> Arduino (UNO,
          Nano, Micro, Mini), ESP32, ESP8266 PlatformIO, Raspberry Pi
        </p>
      </div>
    </>
  );
}
