import { siteConfig } from "@/config/site.config";

export async function GET() {
  try {
    // Fetch the RSS feed from the specified URL
    const rssResponse = await fetch(`${siteConfig.siteUrl}/rss.xml`);

    // Check if the response is successful
    if (!rssResponse.ok) {
      // Handle non-200 responses appropriately
      console.error('Failed to fetch RSS feed:', rssResponse.statusText);
      return new Response("Failed to fetch RSS feed", { status: rssResponse.status });
    }

    // Parse the RSS feed as text
    const rss = await rssResponse.text();

    // Create and return a Response object with the RSS feed
    const response = new Response(rss, {
      status: 200,
      statusText: "OK",
    });

    // Set the content type header to application/xml
    response.headers.append("Content-Type", "text/xml");

    return response;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    // Return a generic error response
    return new Response("Internal Server Error", { status: 500 });
  }
}
