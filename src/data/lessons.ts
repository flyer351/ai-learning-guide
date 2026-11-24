import { getCollection, type CollectionEntry } from 'astro:content';

export type Lesson = CollectionEntry<'lessons'>;

// A lesson's id looks like "ai-basics/02-first-conversation".
export const pathOf = (l: Lesson) => l.id.split('/')[0];
export const slugOf = (l: Lesson) => l.id.split('/')[1].replace(/^\d+-/, '');

export async function lessonsFor(path: string) {
  const all = await getCollection('lessons');
  return all.filter((l) => pathOf(l) === path).sort((a, b) => a.data.order - b.data.order);
}

export async function allLessons() {
  return getCollection('lessons');
}
