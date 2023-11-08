import { ApodItem } from '@/services/planetary/types'
import { formatDistance } from 'date-fns'
import Image from 'next/image'
import { Avatar, AvatarFallback } from './ui/avatar'
import { getAvatarCopyright } from '@/utils/get-avatar-copyright'

type FeedApodItemProps = {
  item: ApodItem
}

export const FeedApodItem = ({ item }: FeedApodItemProps) => {
  const { date, copyright, explanation, url, title, media_type: type } = item

  return (
    <div key={date} className="w-full space-y-2">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>
            {copyright ? getAvatarCopyright(copyright) : 'U'}
          </AvatarFallback>
        </Avatar>

        <h4 className="text-sm font-bold">{copyright ?? 'Unknown'}</h4>

        <span className="h-1 w-1 rounded-full bg-muted-foreground" />

        <span className="text-xs text-muted-foreground">
          {formatDistance(new Date(date), Date.now(), {
            addSuffix: true,
          })}
        </span>
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-sm">
        {type === 'image' ? (
          <Image src={url} alt={title} fill className="object-cover" />
        ) : (
          <iframe
            src={url}
            title={title}
            allowFullScreen
            key={date}
            className="aspect-square w-full"
          />
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-semibold">{title}</h3>

        <p className="line-clamp-3 text-xs text-muted-foreground">
          {explanation}
        </p>
      </div>
    </div>
  )
}
