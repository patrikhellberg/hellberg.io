import AnchorHeader from '@/components/AnchorHeader'
import { cvLink } from '@/utils/config'
import { h1, h2, h3 } from '@/utils/sharedStyles'
import { dateString } from '@/utils/date'
import { education, experiences } from '@/utils/cvData'
import { Check } from 'lucide-react'

const CVSection = () => {
  return (
    <div className='mb-16'>
      <div className='flex items-end mb-4'>
        <AnchorHeader id='cv' text='CV' classes={`${h1}`} />
        <a
          href={cvLink}
          target='_blank'
          rel='noopener noreferrer'
          className='underline ml-2'
        >
          View as PDF
        </a>
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
                <Check width={12} />
                {skill}
              </span>
            ))}
          </div>
          {/* <p className='italic mt-4'>References provided on request</p> */}
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
                <Check width={16} />
                {skill}
              </span>
            ))}
          </div>
          {/* <p className='italic'>Certification provided on request</p> */}
        </div>
      ))}
    </div>
  )
}

export default CVSection
