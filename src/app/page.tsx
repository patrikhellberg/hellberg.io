import AboutSection from '@/components/AboutSection'
import CVSection from '@/components/CVSection'
import ContactSection from '@/components/ContactSection'
// import PortfolioSection from '@/components/PortfolioSection'
import UnderConstruction from '@/components/UnderConstruction'
import Link from 'next/link'

const IS_UNDER_CONSTRUCTION = false

const links = [
  {
    text: 'About',
    href: '/#about',
  },
  {
    text: 'CV',
    href: '/#cv',
  },
  // {
  //   text: 'Portfolio',
  //   href: '/#portfolio',
  // },
  {
    text: 'Contact',
    href: '/#contact',
  },
]

export default function Home() {
  if (IS_UNDER_CONSTRUCTION) return <UnderConstruction />
  const containerClasses = 'max-w-[816px] mx-auto p-4'
  return (
    <div className='min-h-screen'>
      <header className='bg-white fixed w-full h-16 shadow-md'>
        <div
          className={`${containerClasses} flex justify-between items-center`}
        >
          <Link href='/'>
            <h1 className='font-bold text-lg hidden sm:inline'>
              Patrik Hellberg
            </h1>
            <h1 className='font-bold text-lg sm:hidden'>PH</h1>
          </Link>
          <div className='flex gap-4'>
            {links.map((link) => (
              <Link href={link.href} key={link.href} className='underline'>
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <main className={`min-h-screen bg-slate-200 p-4 pt-20 pb-96`}>
        <div className={`${containerClasses} bg-white rounded`}>
          <AboutSection />
          <CVSection />
          {/* <PortfolioSection /> */}
          <ContactSection />
        </div>
      </main>
    </div>
  )
}
