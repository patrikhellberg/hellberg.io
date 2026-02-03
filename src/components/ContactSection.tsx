import { h1 } from '@/utils/sharedStyles'
import { contactItems } from '@/utils/cvData'
import AnchorHeader from '@/components/AnchorHeader'

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
            <item.icon />
            {item.text}
          </a>
        ))}
      </div>
    </>
  )
}

export default ContactSection
