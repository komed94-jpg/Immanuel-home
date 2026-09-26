export type BibleStudyQuestion = {
  key: string;
  label: string;
  prompt: string;
  visibility?: "private" | "leader";
};

export type BibleStudySection = {
  label: string;
  title: string;
  body: string[];
};

export type BibleStudyPage = {
  key: string;
  unit?: number;
  lesson: string;
  title: string;
  eyebrow: string;
  scripture?: string;
  body?: string[];
  sections?: BibleStudySection[];
  questions: BibleStudyQuestion[];
};

export type BibleStudyCourse = {
  slug: string;
  title: string;
  subtitle: string;
  lessonSlug: string;
  overview: string;
  totalLessons?: number;
  pages: BibleStudyPage[];
};


export { immanuelWayCourse } from "./bible-study-immanuel-way";

