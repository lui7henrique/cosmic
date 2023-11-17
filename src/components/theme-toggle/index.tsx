'use client'

import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type ThemeToggleProps = {
  testing?: boolean
}

export function ThemeToggle({ testing }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu open={testing ?? undefined}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="pointer absolute right-4 top-4"
          data-testid="theme-toggle"
          aria-label="Toggle theme"
        >
          <span
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            data-testid={theme === 'light' && 'current-theme'}
          >
            🌞
          </span>

          <span
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            data-testid={theme === 'dark' && 'current-theme'}
          >
            🌚
          </span>

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          🌞 Light
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')}>
          🌚 Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
