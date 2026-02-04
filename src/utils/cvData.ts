import type { Experience, Education, ContactItem } from '@/types'
import { GitBranch, Github, Linkedin, Mail, Phone } from 'lucide-react'

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Natural Cycles',
    description:
      'Working as a software engineer in the growth and aquisition team, optimizing signup and onboarding flows in the Natural Cycles app.',
    start: {
      year: 2024,
      month: 3,
    },
    end: 'current',
    skills: [
      'TypeScript',
      'Angular',
      'Swift',
      'Capacitor',
      'Ionic Framework',
      'Playwright',
      'NodeJS',
      'ExpressJS',
      'AB testing',
      'In-app purchases',
    ],
  },
  {
    title: 'Frontend developer',
    company: 'SGDS Gruppen AB',
    description:
      'Worked as a frontend developer as a part of a larger team consisting of multiple SCRUM teams. Apart from being a developer I was also the SCRUM-master of the team. The product I was working on was a B2B E-commerce platform.',
    start: {
      year: 2022,
      month: 11,
    },
    end: {
      year: 2024,
      month: 1,
    },
    skills: [
      'Vue',
      'Nuxt',
      'Tailwind',
      'GraphQL',
      'TypeScript',
      'Jest',
      'Vitest',
      'Cypress',
      'Contentful',
      'Sentry',
      'Scrum',
      'SAFe',
    ],
  },
  {
    title: 'Fullstack developer',
    company: 'Bucket Media AB',
    start: {
      year: 2020,
      month: 1,
    },
    end: {
      year: 2022,
      month: 11,
    },
    description:
      'Worked as a fullstack developer creating websites and applications for small and medium sized companies. Projects include E-commerce sites, course platforms, administration applications, static websites, CMS driven websites.',
    skills: [
      'React',
      'NextJS',
      'GatsbyJS',
      'Hugo',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'Sanity',
      'Contentful',
      'Netlify',
      'Vercel',
      'Nginx',
    ],
  },
]

export const education: Education[] = [
  {
    title: 'Certified Scrum Master',
    institution: 'Crisp / Scrum Alliance',
    year: 2023,
  },
  {
    title: 'Web development 1 & 2',
    institution: 'Stockholms University',
    year: 2022,
  },
]

export const headerLinks = [
  {
    text: 'About',
    href: '/#about',
  },
  {
    text: 'CV',
    href: '/#cv',
  },
  {
    text: 'Contact',
    href: '/#contact',
  },
]

export const contactItems: ContactItem[] = [
  {
    link: 'mailto:patrik@hellberg.io',
    text: 'patrik@hellberg.io',
    icon: Mail,
  },
  {
    link: 'tel:+46761181414',
    text: '+46 (0) 76 118 14 14',
    icon: Phone,
  },
  {
    link: 'https://www.linkedin.com/in/patrik-hellberg-ramel-56133020b',
    text: 'LinkedIn',
    icon: Linkedin,
  },
  {
    link: 'https://github.com/patrikhellberg',
    text: 'Github',
    icon: Github,
  },
  {
    link: 'https://github.com/patrikhellberg/hellberg.io',
    text: 'Source',
    icon: GitBranch,
  },
]
