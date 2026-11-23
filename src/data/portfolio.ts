export interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export const siteConfig = {
  brand: '9wolF',
  name: 'Your Name',
  role: 'Software Developer',
  headline: 'Building fast, clean, and reliable software for the web.',
  bio: 'Replace this intro with a short summary of what you build, what technologies you enjoy working with, and what kinds of problems you like solving.',
  availability: 'Open to interesting projects & opportunities',
  email: 'hello@example.com',
  githubUrl: 'https://github.com/9wolF',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A short overview of what this project does, the technical challenge behind it, and the impact or outcome.',
    tags: ['TypeScript', 'Astro', 'Tailwind CSS'],
    repoUrl: 'https://github.com/9wolF',
    liveUrl: 'https://9wolf.github.io',
  },
  {
    title: 'Project Two',
    description:
      'Highlight another featured build — such as a developer tool, web application, API service, or open-source library.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    repoUrl: 'https://github.com/9wolF',
  },
  {
    title: 'Project Three',
    description:
      'Showcase a side project, experiment, or system you are proud of. Keep descriptions concise and scannable.',
    tags: ['Python', 'Docker', 'CI/CD'],
    repoUrl: 'https://github.com/9wolF',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['TypeScript', 'Astro', 'React', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Python'],
  },
  {
    category: 'Tooling & Cloud',
    items: ['Git & GitHub Actions', 'Docker', 'Linux', 'pnpm'],
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/9wolF' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
];
