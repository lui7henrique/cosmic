'use client'

import { Apod } from '@/services/planetary/types'
import InfiniteScroll from 'react-infinite-scroller'
import { FeedApodItem } from './feed-apod-item'
import { useRef, useState } from 'react'
import { apod } from '@/services/planetary'
import { format, subMonths } from 'date-fns'
import { formatToApi } from '@/utils/format-to-api'

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
        const newEndDate = subMonths(new Date(), page)

        const newContent = await apod(
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
      loader={
        <span key={0} className="loader">
          Loading ...
        </span>
      }
      className="mx-auto max-w-feed space-y-8 py-8"
    >
      {content.map((item) => {
        return <FeedApodItem item={item} key={item.date} />
      })}
    </InfiniteScroll>
  )
}
