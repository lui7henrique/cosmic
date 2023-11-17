import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Roboto_Mono } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

import './globals.css'
import { ThemeToggle } from '@/components/theme-toggle'

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosmic',
  description:
    'Every day a different photo or video of the universe, with a brief explanation from a professional astronomer!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={cn('overflow-x-hidden bg-background antialiased')}>
        <ThemeProvider>
          {children}

          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
