import { Skeleton } from './ui/skeleton'

export const FeedItemSkeleton = () => {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <Skeleton className="h-10 w-10 rounded-full" />

        <div className="w-2/3 space-y-1">
          <Skeleton className="h-4 w-1/2" />

          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-sm">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-1/2" />

        <div className="space-y-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  )
}
