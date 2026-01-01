export const Channel = {
  ABOUT: 'about',
  PROJECTS: 'projects',
  CV: 'cv',
  SKILLS: 'skills'
} as const;

export type Channel = typeof Channel[keyof typeof Channel];

export const CHANNEL_LABELS: Record<Channel, string> = {
  [Channel.ABOUT]: 'About',
  [Channel.PROJECTS]: 'Projects',
  [Channel.CV]: 'CV',
  [Channel.SKILLS]: 'Skills'
};

export const DEFAULT_CHANNEL = Channel.ABOUT;
