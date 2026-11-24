import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    minutes: z.number(),
    device: z.string().default('Any computer, phone or tablet'),
    summary: z.string(),
  }),
});

export const collections = { lessons };
