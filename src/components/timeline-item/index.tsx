'use client'

import { ApodItem } from '@/services/planetary/types'
import { FeedItem } from '../feed-item'

type TimelineItemProps = {
  item: ApodItem
}

export const TimelineItem = ({ item }: TimelineItemProps) => {
  return (
    <div className="relative flex flex-col gap-4 before:absolute before:left-[-35px] before:top-2 before:z-[1] before:h-4 before:w-4 before:rounded-full before:dark:bg-muted-foreground">
      <FeedItem variant="with-year" item={item} />
    </div>
  )
}
