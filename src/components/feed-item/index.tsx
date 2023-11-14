import { ApodItem } from '@/services/planetary/types'
import { format, formatDistance } from 'date-fns'
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

type FeedItemProps = {
  item: ApodItem
  variant: 'minimal' | 'full'
} & ComponentProps<'div'>

export const FeedItem = ({ item, variant }: FeedItemProps) => {
  const { date, copyright, explanation, url, title, media_type: type } = item

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
          <h4 className="text-sm font-bold">{copyright ?? 'Unknown'}</h4>

          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-xs text-muted-foreground">
                    {formatDistance(new Date(date), Date.now(), {
                      addSuffix: true,
                    })}
                  </span>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{format(new Date(date), 'PPP')}</p>
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
