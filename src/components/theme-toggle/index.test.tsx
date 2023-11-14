import { beforeAll, describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from '.'

describe('ThemeToggle', async () => {
  beforeAll(async () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeToggle testing />
      </ThemeProvider>,
    )
  })

  it('should be able to render ThemeToggle with defaultTheme', () => {
    expect(screen.queryByTestId('current-theme')?.textContent).toBe('🌞')
  })

  it('should be able to change theme to light', async () => {
    fireEvent.click(await screen.findByText('🌞 Light'))

    expect(screen.queryByTestId('current-theme')?.textContent).toBe('🌞')
  })

  it('should be able to change theme to dark', async () => {
    fireEvent.click(await screen.findByText('🌚 Dark'))

    expect(screen.queryByTestId('current-theme')?.textContent).toBe('🌚')
  })

  it('should not be able to render theme options', async () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>,
    )
  })
})
