import Image from 'next/image'

const Header = () => {
  return (
    <div className='relative mb-16'>
      <Image
        src='/cover.jpeg'
        alt='cover'
        className='rounded md:block'
        width={800}
        height={100}
        priority
      />
      <Image
        className='rounded-full shadow-2xl sm:w-28 md:w-48 w-20 absolute -bottom-8 left-8'
        title='Patrik Hellberg'
        src='/portrait.jpeg'
        alt='Patrik Hellberg'
        width={200}
        height={200}
      />
    </div>
  )
}

export default Header
