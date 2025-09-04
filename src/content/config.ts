import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const sessions = defineCollection({
  loader: glob({
    pattern: "src/content/sessions/**/*.json",
  }),
  schema: z.object({
    date: z.string().refine(Date.parse).transform(x => new Date(x)),
    players: z.array(z.object({
      nickname: z.string(),
      net: z.number(),
      total_time_hours: z.number(),
      hourly_rate: z.number()
    }))
  }),
});


export const collections = { sessions };
