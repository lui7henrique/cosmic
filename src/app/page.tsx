import { DatePicker } from '@/components/date-picker'
import FeedApod from '@/components/feed-apod-server'
import { Button } from '@/components/ui/button'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div>
      <main className="flex h-[75vh] w-screen flex-col items-center justify-center gap-4 bg-[#f9f9f9] text-center dark:bg-background/50">
        <div className="space-y-2">
          <h1 className="text-4xl font-thin">
            Welcome,{' '}
            <span className="text-5xl font-bold italic">Earthling!</span>
          </h1>

          <p className="text-sm text-muted-foreground">
            Discover the photo that was taken on your birth-date!
          </p>
        </div>

        <div className="flex gap-2">
          <DatePicker placeholder="Pick a date" />

          <Button size="icon" variant="outline">
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Button>
        </div>
      </main>

      <Suspense fallback={<h2>Loading...</h2>}>
        <FeedApod />
      </Suspense>
    </div>
  )
}
