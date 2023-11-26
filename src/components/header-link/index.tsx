'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

type HeaderLinkProps = { href: string; label: string }

export const HeaderLink = ({ href, label }: HeaderLinkProps) => {
  const path = usePathname()

  const isActive = useMemo(() => {
    if (href === '/') {
      return path === '/'
    }

    return path.includes(href)
  }, [href, path])

  return (
    <Link
      href={href}
      className={cn(
        'text-xs transition-all',
        isActive ? 'font-bold' : 'font-normal text-muted-foreground',
      )}
    >
      {label}
    </Link>
  )
}
