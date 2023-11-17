import { ApodItem } from '@/services/planetary/types'
import { formatDistance } from 'date-fns'
import Image from 'next/image'

import { Avatar, AvatarFallback } from '../ui/avatar'
import { getAvatarCopyright } from '@/utils/get-avatar-copyright'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { FeedItemExplanation } from '../feed-item-explanation'
import { ComponentProps } from 'react'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { formatToUI } from '@/utils/format-to-ui'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'

type FeedItemProps = {
  item: ApodItem
  variant: 'minimal' | 'full' | 'with-year'
} & ComponentProps<'div'>

export const FeedItem = ({ item, variant }: FeedItemProps) => {
  const {
    date,
    copyright,
    explanation,
    url,
    hdurl,
    title,
    media_type: type,
  } = item

  const content = (
    <div className="relative aspect-square w-full overflow-hidden rounded-sm">
      {type === 'image' ? (
        <Image
          src={url}
          alt={title}
          fill
          className="object-cover"
          sizes="width 100%"
          priority={false}
        />
      ) : (
        <iframe
          src={url}
          title={title}
          allowFullScreen
          key={date}
          className="aspect-square w-full"
          data-testId="iframe"
        />
      )}

      <a
        className="pointer absolute right-4 top-4 flex items-center justify-center rounded-sm bg-background p-1.5 text-xs"
        href={hdurl || url}
        target="_blank"
        aria-label={`View original ${formatToUI(new Date())} image`}
      >
        <ExternalLinkIcon />
      </a>
    </div>
  )

  if (variant === 'minimal') {
    return content
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2 px-4 sm:px-0">
        <Avatar>
          <AvatarFallback>
            {copyright ? getAvatarCopyright(copyright) : 'U'}
          </AvatarFallback>
        </Avatar>

        <div>
          <p className="text-sm font-bold">{copyright ?? 'Unknown'}</p>

          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-xs text-muted-foreground">
                    {variant === 'with-year'
                      ? formatToUI(new Date(date), 'yyyy')
                      : formatDistance(new Date(date), Date.now(), {
                          addSuffix: true,
                        })}
                  </span>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{formatToUI(new Date(date))}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {content}

      <div className="space-y-1 px-4 sm:px-0">
        <h3 className="text-sm font-semibold">{title}</h3>

        <FeedItemExplanation explanation={explanation} />
      </div>
    </div>
  )
}
