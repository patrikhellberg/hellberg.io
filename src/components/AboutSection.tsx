import { h1 } from '@/utils/sharedStyles'
import Image from 'next/image'

const AboutSection = () => {
  const age = (bDay: string) => {
    const birthdateObj = new Date(bDay)
    const currentDate = new Date()
    let age = currentDate.getFullYear() - birthdateObj.getFullYear()
    if (
      currentDate.getMonth() < birthdateObj.getMonth() ||
      (currentDate.getMonth() === birthdateObj.getMonth() &&
        currentDate.getDate() < birthdateObj.getDate())
    ) {
      age--
    }

    return age
  }
  return (
    <div id='about' className='mb-16'>
      <div className='flex items-end gap-4 mb-8'>
        <Image
          className='rounded'
          title='Patrik Hellberg'
          src='/portrait.jpg'
          alt='Patrik Hellberg'
          width={200}
          height={286}
          priority
        />
        <h1 className={h1}>About me</h1>
      </div>
      <p className='mb-2'>
        Hello. I'm a {age('1996-06-17')}-year-old web developer from Sweden.
        I've been working in development for almost 4 years, in roles as a
        full-stack and frontend developer. JavaScript, TypeScript, React, Vue,
        NodeJS, and MongoDB are some of my go-to tools for crafting great
        digital experiences.
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
