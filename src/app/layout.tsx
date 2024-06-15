import "@/styles/globals.css";
import { Metadata } from "next/types";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site.config";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.creator.name,
      url: siteConfig.creator.url,
    },
  ],
  creator: siteConfig.creator.name,

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // OpenGraph metadata
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1800,
        height: 1000,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: siteConfig.creator.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: {
      url: siteConfig.ogImage,
      width: 1800,
      height: 1000,
      alt: siteConfig.name,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.variable, fontHeading.variable)}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow">
                <div className="app">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
