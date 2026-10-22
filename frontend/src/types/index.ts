export type OlympiadCategory = 'A' | 'B' | 'C' | 'D' | 'all';
export type OlympiadRound = 'all' | 'regional' | 'national' | 'camp' | 'selection';
export type LanguageOption = 'both' | 'bn' | 'en';

export interface PastPaper {
  id: string;
  edition: string; // e.g. "16th", "15th"
  year: number;
  category: OlympiadCategory;
  round: OlympiadRound;
  region: string; // "Dhaka", "Chittagong", "All", etc.
  set: string; // "1", "2", "3", "4", "6", "all"
  language: LanguageOption;
  title: string;
  subtitle: string;
  downloadUrl: string;
  hasSolution: boolean;
  solutionsUrl?: string;
  topics: string[];
  difficulty: 'Elementary' | 'Intermediate' | 'Advanced' | 'IPhO Level';
}

export interface Notice {
  id: string;
  title: string;
  banglaTitle?: string;
  date: string;
  category: string;
  isUrgent?: boolean;
  isPinned?: boolean;
  summary: string;
  linkText?: string;
  linkUrl?: string;
  officialRef?: string;
}

export interface CategorySpec {
  id: 'A' | 'B' | 'C' | 'D';
  name: string;
  tagline: string;
  targetClasses: string;
  typicalAge: string;
  badgeColor: string;
  borderGlow: string;
  examDuration: string;
  questionPattern: string;
  syllabusSummary: string;
  keySubjects: string[];
  sampleQuestion: {
    problem: string;
    answerHint: string;
  };
  syllabusUrl: string;
}

export interface Medalist {
  id: string;
  year: number;
  edition: string;
  competition: 'IPhO' | 'APhO' | 'EuPhO';
  studentName: string;
  school: string;
  city: string;
  award: 'Gold' | 'Silver' | 'Bronze' | 'Honorable Mention' | 'Representative';
  hostLocation: string;
  photoUrl?: string;
  quote?: string;
}

export interface SyllabusDomain {
  id: string;
  title: string;
  icon: string;
  weightage: string;
  summary: string;
  subtopics: {
    name: string;
    categories: ('A' | 'B' | 'C' | 'D')[];
    description: string;
    formulas?: string[];
  }[];
  recommendedBooks: {
    title: string;
    author: string;
    level: string;
  }[];
}

export interface CommitteeMember {
  id: string;
  name: string;
  banglaName?: string;
  role: string;
  institution: string;
  tier: 'Patron' | 'Advisory' | 'Executive' | 'Academic' | 'Regional';
  image: string;
  bio?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  caption: string;
  year: string;
  imageUrl: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
