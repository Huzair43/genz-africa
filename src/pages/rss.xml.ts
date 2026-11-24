import { getCollection } from "astro:content";
import type { APIContext } from "astro";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET({ site }: APIContext) {
  const baseUrl = site ?? new URL("https://genz-africa.com");
  const resources = (await getCollection("ressources", ({ data }) => data.published)).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const items = resources
    .map((resource) => {
      const url = new URL(`ressources/${resource.slug}/`, baseUrl).href;
      return `  <item>
    <title>${escapeXml(resource.data.title)}</title>
    <link>${url}</link>
    <guid>${url}</guid>
    <description>${escapeXml(resource.data.description)}</description>
    <pubDate>${new Date(resource.data.date).toUTCString()}</pubDate>
    <category>${escapeXml(resource.data.category)}</category>
  </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>GenZ Africa</title>
    <link>${baseUrl.href}</link>
    <description>Ressources et guides de la communauté GenZ Africa pour les étudiants et jeunes professionnels burkinabè.</description>
    <language>fr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
