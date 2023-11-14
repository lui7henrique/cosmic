import { describe, beforeAll, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeedClient } from '.'
import { feed } from '../../../test/mock/feed'

describe('FeedClient', () => {
  beforeAll(() => {
    render(<FeedClient initialContent={feed} />)
  })

  it('renders the FeedClient component', () => {
    const element = screen.getByTestId('feed')

    expect(element).not.toBe(null)
  })

  it('renders the FeedClient component with initial content', () => {
    const element = screen.getByTestId('feed')
    const elementChildCount = element.childElementCount - 1 // last is skeleton
    const matchElementCount = elementChildCount === feed.length

    expect(matchElementCount).toBe(true)
  })
})
