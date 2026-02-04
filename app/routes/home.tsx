import AboutSection from '~/components/AboutSection'
import CVSection from '~/components/CVSection'
import ContactSection from '~/components/ContactSection'
import { headerLinks } from '~/utils/cvData'

export default function Home() {
  const containerClasses = 'max-w-[816px] mx-auto p-4'

  return (
    <div className="min-h-screen">
      <header className="bg-white fixed z-10 w-full h-16 shadow-md">
        <div
          className={`${containerClasses} flex justify-between items-center`}
        >
          <a href="/">
            <h1 className="font-bold text-lg hidden sm:inline">
              Patrik Hellberg Ramel
            </h1>
            <h1 className="font-bold text-lg sm:hidden">PHR</h1>
          </a>
          <div className="flex gap-4">
            {headerLinks.map((link) => (
              <a href={link.href} key={link.href} className="underline">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </header>
      <main className={`min-h-screen bg-slate-200 p-4 pt-20 pb-96`}>
        <div className={`${containerClasses} bg-white rounded`}>
          <AboutSection />
          <CVSection />
          <ContactSection />
        </div>
      </main>
    </div>
  )
}
