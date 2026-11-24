export type IconName = 'chat' | 'list' | 'agent' | 'phone' | 'globe' | 'shield';

export interface LearningPath {
  slug: string;
  title: string;
  blurb: string;
  intro: string;
  icon: IconName;
  device?: string;
}

// The order here is the order paths appear on the site.
export const paths: LearningPath[] = [
  {
    slug: 'ai-basics',
    title: 'AI basics',
    blurb: 'What AI is, and your first conversation with an assistant.',
    intro: 'Start here if you have never used an AI assistant, or have tried one and were not sure what to make of it. By the end you will be comfortable asking questions, judging the answers, and keeping your information private.',
    icon: 'chat',
  },
  {
    slug: 'everyday-help',
    title: 'Everyday help',
    blurb: 'Letters, budgets, research, health questions and travel.',
    intro: 'Practical ways to put an AI assistant to work on the tasks that fill a normal week. Each lesson gives you example messages you can copy and adapt.',
    icon: 'list',
  },
  {
    slug: 'agentic-ai',
    title: 'AI that does tasks',
    blurb: 'What "agentic" AI means, and how to keep it on a short leash.',
    intro: 'Newer AI tools can do more than answer questions. They can click through websites, organize files and write software for you. This path explains what these "agents" are, where they help, and the guardrails to use.',
    icon: 'agent',
  },
  {
    slug: 'iphone-app',
    title: 'Build an iPhone app',
    blurb: 'From a napkin idea to the App Store, with AI helping.',
    intro: 'You can build a simple, useful iPhone app without a computer science degree, with an AI assistant writing much of the code. This path walks through the whole journey, one manageable step at a time.',
    icon: 'phone',
    device: 'Mac',
  },
  {
    slug: 'website',
    title: 'Build a website',
    blurb: 'Make a simple site and publish it for free.',
    intro: 'A personal website is one of the best first projects: low cost, forgiving, and something you can show friends and family. Everything in this path works on a Mac or a Windows PC, and you can even start from a tablet or phone.',
    icon: 'globe',
    device: 'Mac or PC',
  },
  {
    slug: 'money-honestly',
    title: 'Money, honestly',
    blurb: 'Modest side income, and spotting "AI riches" scams.',
    intro: 'Can a hobby app or website bring in a little extra money? Sometimes, modestly. This path gives realistic numbers, and shows how to recognize the costly programs that promise much more.',
    icon: 'shield',
  },
];

export const getPath = (slug: string) => paths.find((p) => p.slug === slug);
