import { getCollection } from "astro:content";

const staticPages = ["/", "/ressources/", "/a-propos/", "/contact/"];

export async function GET({ site }) {
  const resources = await getCollection("ressources", ({ data }) => data.published);
  const baseUrl = site ?? new URL("https://genz-africa.github.io");
  const urls = [
    ...staticPages,
    ...resources.map((resource) => `/ressources/${resource.slug}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((path) => `  <url><loc>${new URL(path, baseUrl).href}</loc></url>`)
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
