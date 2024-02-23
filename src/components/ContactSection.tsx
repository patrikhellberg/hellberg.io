import { h1 } from '@/utils/sharedStyles'
import Icon from './Icon'
import { IconName } from '@/utils/iconData'
import AnchorHeader from './AnchorHeader'

type ContactItem = {
  link: string
  text: string
  icon?: IconName
}

export const contactItems: ContactItem[] = [
  {
    link: 'mailto:patrik@hellberg.io',
    text: 'patrik@hellberg.io',
    icon: 'email',
  },
  {
    link: 'tel:+46761181414',
    text: '+46 (0) 76 118 14 14',
    icon: 'phone',
  },
  {
    link: 'https://www.linkedin.com/in/patrik-hellberg-56133020b/',
    text: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    link: 'https://github.com/patrikhellberg',
    text: 'Github',
    icon: 'github',
  },
]

const ContactSection = () => {
  return (
    <>
      <AnchorHeader text='Contact' id='contact' classes={`${h1} mb-4`} />
      <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4'>
        {contactItems.map((item) => (
          <a
            href={item.link}
            key={item.link}
            target='_blank'
            rel='noreferrer noopener'
            className='flex underline items-center gap-2'
          >
            <Icon name={item.icon} size={32} />
            {item.text}
          </a>
        ))}
      </div>
    </>
  )
}

export default ContactSection
