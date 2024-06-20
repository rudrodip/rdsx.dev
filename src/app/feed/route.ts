import { siteConfig } from "@/config/site.config";

export async function GET() {
  const rssResponse = await fetch(`${siteConfig.siteUrl}/rss.xml`);
  const rss = await rssResponse.text();
  const response = new Response(rss, {
    status: 200,
    statusText: "ok",
  });
  response.headers.append("content-type", "text/xml");
  return response;
}
