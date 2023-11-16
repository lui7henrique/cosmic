import { describe, it, expect, beforeAll } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import { FeedItemExplanation } from '.'

describe('FeedItemExplanation', () => {
  beforeAll(() => {
    const explanationText =
      'This is a long explanation that needs to be truncated.'

    render(<FeedItemExplanation explanation={explanationText} />)
  })

  it('renders the FeedItemExplanation component with truncated text', () => {
    const element = screen.getByText(/This is a long explanation/)

    expect(element.classList.contains('line-clamp-3')).toBe(true)
  })

  it('expands the explanation when "See more" is clicked', () => {
    fireEvent.click(screen.getByText('See more'))

    const element = screen.getByText(/This is a long explanation/)

    expect(element.classList.contains('line-clamp-3')).toBe(false)
  })

  it('collapses the explanation when "See less" is clicked', () => {
    fireEvent.click(screen.getByText('See less'))

    const element = screen.getByText(/This is a long explanation/)

    expect(element.classList.contains('line-clamp-3')).toBe(true)
  })
})
