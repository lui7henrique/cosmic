'use client'

import { Apod } from '@/services/planetary/types'
import InfiniteScroll from 'react-infinite-scroller'
import { FeedApodItem } from './feed-apod-item'
import { useRef, useState } from 'react'
import { apodFeed } from '@/services/planetary'
import { subDays, subMonths } from 'date-fns'
import { formatToApi } from '@/utils/format-to-api'
import { FeedApodItemSkeleton } from './feed-apod-item-skeleton'

type FeedApodClientProps = {
  initialContent: Apod
}

export const FeedApodClient = ({ initialContent }: FeedApodClientProps) => {
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
    <InfiniteScroll
      hasMore
      pageStart={0}
      loadMore={loadMore}
      loader={<FeedApodItemSkeleton />}
      className="mx-auto grid max-w-[720px] grid-cols-2 gap-4 py-8"
    >
      {content.map((item) => {
        return <FeedApodItem item={item} key={item.date} />
      })}
    </InfiniteScroll>
  )
}
