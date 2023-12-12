import Image from 'next/image'

const Header = () => {
  return (
    <div className='mb-4'>
      <Image
        className='rounded-full shadow-2xl sm:w-28 md:w-48 w-20'
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
