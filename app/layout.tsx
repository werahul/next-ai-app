import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'Next App',
  description: 'Basic Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
        {children}
        </main>
        </body>
    </html>
  )
}
