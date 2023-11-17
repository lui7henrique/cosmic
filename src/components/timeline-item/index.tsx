'use client'

import { ApodItem } from '@/services/planetary/types'
import { FeedItem } from '../feed-item'

type TimelineItemProps = {
  item: ApodItem
}

export const TimelineItem = ({ item }: TimelineItemProps) => {
  return (
    <div className="flex flex-col gap-4 before:dark:bg-muted-foreground sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
      <FeedItem variant="with-year" item={item} />
    </div>
  )
}
