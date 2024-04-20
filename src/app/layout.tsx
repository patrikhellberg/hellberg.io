import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AtlasAnalytics } from '@bm-js/atlas-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patrik Hellberg',
  description: 'Personal website of Patrik Hellberg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <AtlasAnalytics />
      </body>
    </html>
  )
}
