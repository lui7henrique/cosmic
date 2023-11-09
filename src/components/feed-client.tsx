'use client'

import { subDays, subMonths } from 'date-fns'
import { useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { v4 } from 'uuid'

import { Apod } from '@/services/planetary/types'

import { apodFeed } from '@/services/planetary'

import { formatToApi } from '@/utils/format-to-api'
import { FeedItemSkeleton } from './feed-item-skeleton'
import { FeedItem } from './feed-item'

type FeedClientProps = {
  initialContent: Apod
}

export const FeedClient = ({ initialContent }: FeedClientProps) => {
  const fetching = useRef(false)
  const [pages, setPages] = useState([initialContent])
  const content = pages.flatMap((page) => page)

  const loadMore = async (page: number) => {
    if (!fetching.current) {
      try {
        const newStarDate = subMonths(subMonths(new Date(), 1), page)

        const newEndDate = subDays(subMonths(new Date(), page), 1)

        const newContent = await apodFeed(
          formatToApi(newStarDate),
          formatToApi(newEndDate),
        )

        if (newContent) setPages((prev) => [...prev, newContent])
      } finally {
        fetching.current = false
      }
    }
  }

  return (
    <div className="relative w-full">
      <InfiniteScroll
        hasMore
        pageStart={0}
        loadMore={loadMore}
        loader={<FeedItemSkeleton />}
        className="relative mx-auto max-w-feed space-y-8 py-8"
      >
        {content.map((item) => {
          return <FeedItem item={item} key={v4()} variant="full" />
        })}
      </InfiniteScroll>
    </div>
  )
}
