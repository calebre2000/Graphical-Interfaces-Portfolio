export enum Channel {
  ABOUT = 'about',
  PROJECTS = 'projects',
  EDUCATION = 'education',
  SKILLS = 'skills'
}

export const CHANNEL_LABELS: Record<Channel, string> = {
  [Channel.ABOUT]: 'About',
  [Channel.PROJECTS]: 'Projects',
  [Channel.EDUCATION]: 'Education',
  [Channel.SKILLS]: 'Skills'
};

export const DEFAULT_CHANNEL = Channel.ABOUT;
