import Image from 'next/image'

const Header = () => {
  return (
    <div className='relative mb-16'>
      <Image
        src='/cover.jpeg'
        alt='cover'
        className='rounded'
        width={800}
        height={100}
      />
      <Image
        className='rounded-full shadow-2xl absolute -bottom-8 left-8'
        title='Patrik Hellberg'
        src='/portrait.jpeg'
        alt='Patrik Hellberg'
        width={200}
        height={200}
        priority
      />
    </div>
  )
}

export default Header
