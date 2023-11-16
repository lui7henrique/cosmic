import { describe, it, expect, beforeAll } from 'vitest'

import { render, screen } from '@testing-library/react'
import { FeedItem } from '.'

describe('FeedItem', () => {
  const mockItem = {
    date: '2023-01-01',
    copyright: 'Mock Copyright',
    explanation: 'Mock Explanation',
    url: 'https://picsum.photos/400',
    title: 'Mock Title',
    media_type: 'image',
    service_version: '1',
  }

  beforeAll(() => {
    render(<FeedItem item={mockItem} variant="minimal" />)
  })

  it('renders the FeedItem component in minimal variant', () => {
    expect(screen.getByAltText('Mock Title')).not.toBeNull()
  })

  it('renders the FeedItem component in full variant', () => {
    render(<FeedItem item={mockItem} variant="full" />)

    expect(screen.getByText('Mock Copyright')).not.toBeNull()
    expect(screen.getByText('Mock Title')).not.toBeNull()
    expect(screen.getByText('Mock Explanation')).not.toBeNull()
  })

  it('renders the FeedItem component without copyright', () => {
    render(
      <FeedItem item={{ ...mockItem, copyright: undefined }} variant="full" />,
    )

    expect(screen.getByText('Unknown')).not.toBeNull()
  })

  it('renders the FeedItem component with no-image content', () => {
    render(
      <FeedItem
        item={{ ...mockItem, media_type: 'video', title: 'haha' }}
        variant="full"
      />,
    )

    expect(screen.getByTestId('iframe')).not.toBeNull()
  })
})
