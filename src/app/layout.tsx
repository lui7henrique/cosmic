import type { Metadata } from 'next'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import './globals.css'

const space = SpaceGrotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosmic',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={space.className}>{children}</body>
    </html>
  )
}
