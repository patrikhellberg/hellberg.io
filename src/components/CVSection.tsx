import { h1, h2, h3 } from '@/utils/sharedStyles'
import Check from './Check'
import Icon from './Icon'
import AnchorHeader from './AnchorHeader'
import PDFButton from './PDFButton'

type YearMonth =
  | {
      year: number
      month: number
    }
  | 'current'

type Experience = {
  title: string
  company: string
  start: YearMonth
  end: YearMonth
  description: string
  skills: string[]
}

type Education = {
  title: string
  institution?: string
  description?: string
  year: number
  skills?: string[]
}

const experiences: Experience[] = [
  {
    title: 'Frontend developer',
    company: 'SGDS Gruppen AB',
    description:
      'I am working as a frontend developer as a part of a larger team consisting of multiple SCRUM teams. Apart from being a developer I am also the SCRUM-master of the team. The product I am working on is a B2B E-commerce platform.',
    start: {
      year: 2022,
      month: 11,
    },
    end: 'current',
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
    ],
  },
]

const education: Education[] = [
  {
    title: 'Certified Scrum Master',
    institution: 'Crisp / Scrum Alliance',
    year: 2023,
  },
  // {
  //   title: 'AWS Certified Cloud Practitioner',
  //   institution: 'AWS',
  //   year: 2023,
  // },
  {
    title: 'Web development 1',
    institution: 'Stockholms University',
    year: 2022,
  },
  {
    title: 'Web development 2',
    institution: 'Stockholms University',
    year: 2022,
  },
]

const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

const dateString = (yearMonth: YearMonth): string => {
  if (yearMonth === 'current') return 'current'
  const { year, month } = yearMonth
  return `${year} ${months[month - 1]}`
}

const CVSection = () => {
  return (
    <div className='mb-16'>
      <div className='flex gap-4 items-end mb-4'>
        <AnchorHeader id='cv' text='CV' classes={`${h1}`} />
        <PDFButton />
      </div>
      <h2 className={`${h2} mb-2`}>Experience</h2>
      {experiences.map((experience) => (
        <div
          key={experience.title}
          className='border border-gray-400 p-4 rounded mb-4'
        >
          <h3 className={h3}>
            {experience.title} - {experience.company}
          </h3>
          <p className='text-gray-600'>
            {dateString(experience.start)} - {dateString(experience.end)}
          </p>
          <p className='mb-4 mt-2'>{experience.description}</p>
          <div className='flex flex-wrap gap-2'>
            {experience.skills.map((skill) => (
              <span
                key={`skill_${skill}_${experience.title}`}
                className='flex gap-px items-center text-sm'
              >
                <Icon name='check' size={12} />
                {skill}
              </span>
            ))}
          </div>
          <p className='italic mt-4'>References provided on request</p>
        </div>
      ))}
      <h2 className={`${h2} mb-2`}>Education</h2>
      {education.map((edu) => (
        <div
          key={edu.title}
          className='border border-gray-400 p-4 rounded mb-4'
        >
          <h3 className={h3}>{edu.title}</h3>
          <p className='text-gray-600'>
            {edu.institution} - {edu.year}
          </p>
          <p className='mb-4 mt-2'>{edu.description}</p>
          <div className='flex flex-wrap gap-2'>
            {edu.skills?.map((skill) => (
              <span
                key={`skill_${skill}_${edu.title}`}
                className='flex gap-1 items-center'
              >
                <Check size={16} />
                {skill}
              </span>
            ))}
          </div>
          <p className='italic'>Certification provided on request</p>
        </div>
      ))}
    </div>
  )
}

export default CVSection
