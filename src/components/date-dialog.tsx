'use client'

import { ReactNode } from 'react'
import { useQuery } from 'react-query'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { format, formatDistance } from 'date-fns'
import { apodDate } from '@/services/planetary'
import { formatToApi } from '@/utils/format-to-api'
import Image from 'next/image'
import { Avatar, AvatarFallback } from './ui/avatar'
import { getAvatarCopyright } from '@/utils/get-avatar-copyright'
import { FeedItemExplanation } from './feed-item-explanation'

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

        <DialogContent>
          <DialogHeader>
            {date && (
              <>
                <DialogTitle>{format(date, 'PPP')}</DialogTitle>

                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  const { media_type: type, url, title, explanation, hdurl, copyright } = data

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-h-[75vh] max-w-xl overflow-auto sm:max-h-none">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback>
              {copyright ? getAvatarCopyright(copyright) : 'U'}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h4 className="text-sm font-bold">{copyright ?? 'Unknown'}</h4>

            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-muted-foreground sm:block">
                {formatDistance(new Date(date), Date.now(), {
                  addSuffix: true,
                })}
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-muted-foreground sm:block" />

              <span className="text-xs text-muted-foreground">
                {format(date, 'PPP')}
              </span>
            </div>
          </div>
        </div>

        <div className="relative aspect-square w-full overflow-hidden rounded-sm">
          {type === 'image' ? (
            <Image
              src={hdurl || url}
              alt={title}
              fill
              className="object-cover"
              sizes="width 100%"
              priority={false}
            />
          ) : (
            <iframe
              src={hdurl || url}
              title={title}
              allowFullScreen
              className="aspect-square w-full"
            />
          )}
        </div>

        <DialogDescription className="text-xs">
          <FeedItemExplanation explanation={explanation} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
