'use client'

import { ReactNode } from 'react'
import { useQuery } from 'react-query'

import { apodDate } from '@/services/planetary'
import { formatToApi } from '@/utils/format-to-api'

import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { FeedItem } from '../feed-item'
import { FeedItemSkeleton } from '../feed-item-skeleton'

type DialogDateProps = {
  children: ReactNode
  date: Date
}

export const DialogDate = ({ children, date }: DialogDateProps) => {
  const { data, isLoading } = useQuery(
    ['date', date],
    async () => await apodDate(formatToApi(date)),
  )

  if (isLoading || !data) {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent className="max-h-[75vh] max-w-xl overflow-auto sm:max-h-none">
          <FeedItemSkeleton />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-h-[75vh] max-w-xl overflow-auto sm:max-h-none">
        <FeedItem item={data} variant="full" />
      </DialogContent>
    </Dialog>
  )
}
