import { h1 } from '@/utils/sharedStyles'
import AnchorHeader from './AnchorHeader'
import Header from './Header'

const AboutSection = () => {
  const yearsSinceDate = (start: string) => {
    const startDate = new Date(start)
    const currentDate = new Date()
    let yearsSince = currentDate.getFullYear() - startDate.getFullYear()
    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      yearsSince--
    }

    return yearsSince
  }

  return (
    <div className='mb-16'>
      <Header />
      <AnchorHeader text='About me' id='about' classes={`${h1} mb-4`} />
      <p className='mb-2'>
        Hello. I&apos;m a {yearsSinceDate('1996-06-17')}-year-old web developer
        from Sweden. I&apos;ve been working in development for{' '}
        {yearsSinceDate('2020-01-01')} years, in roles as a full-stack and
        frontend developer. JavaScript, TypeScript, React, Vue, NodeJS, and
        MongoDB are some of my go-to tools for crafting great digital
        experiences.
      </p>
      <p className='mb-2'>
        I stay motivated by constantly learning new things. It keeps me excited
        and passionate about web development. I love picking up new skills and
        staying on top of the latest trends.
      </p>
      <p>
        I am not just about code, I am also a certified Scrum Master, and have
        worked as Scrum Master in parallell with my developer role.
      </p>
    </div>
  )
}

export default AboutSection
