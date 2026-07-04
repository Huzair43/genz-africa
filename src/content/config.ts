import { defineCollection, z } from "astro:content";

const ressources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "Carrière",
      "Bourses",
      "Mobilité internationale",
      "Recherche & méthode",
      "Vie professionnelle"
    ]),
    tags: z.array(z.string()).default([]),
    author: z.string().default("GenZ Africa"),
    authorUrl: z.string().url().optional(),
    date: z.string(),
    readingTime: z.string(),
    published: z.boolean().default(false)
  })
});

export const collections = { ressources };
