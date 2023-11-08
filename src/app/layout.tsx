import type { Metadata } from 'next'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

import './globals.css'
import { ThemeToggle } from '@/components/theme-toggle'

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
      <body
        className={cn(
          'overflow-x-hidden bg-background font-sans antialiased',
          space.className,
        )}
      >
        <ThemeProvider>
          {children} <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
