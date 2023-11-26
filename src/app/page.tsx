import { Suspense } from 'react'

import { v4 } from 'uuid'

import { DatePicker } from '@/components/date-picker'
import { FeedItemSkeleton } from '@/components/feed-item-skeleton'
import FeedServer from '@/components/feed-server'

export default function Home() {
  return (
    <div>
      <main className="relative flex h-[75vh] w-screen flex-col items-center justify-center gap-4 border-b bg-[#f9f9f9] px-4 text-center dark:bg-background/50 sm:px-0">
        <div className="space-y-2">
          <h1 className="text-4xl font-thin">
            Welcome,{' '}
            <span className="text-5xl font-bold italic">Earthling! </span>
          </h1>
          <p className="text-sm text-muted-foreground">
            Discover the photo that was taken on your birth-date!
          </p>
        </div>

        <div className="flex gap-2">
          <DatePicker placeholder="Pick a date" />
        </div>
      </main>

      <Suspense
        fallback={
          <div className="mx-auto max-w-feed space-y-8 py-8">
            {Array.from({ length: 5 }).map(() => (
              <FeedItemSkeleton key={v4()} />
            ))}
          </div>
        }
      >
        <FeedServer />
      </Suspense>
    </div>
  )
}

export const revalidate = 3600 // revalidate at most every hour
