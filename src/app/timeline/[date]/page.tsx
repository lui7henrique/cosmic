import { DatePicker } from '@/components/date-picker'
import { Timeline } from '@/components/timeline'
import { formatToApi } from '@/utils/format-to-api'

export default function TimelineDate({ params }: { params: { date: string } }) {
  const date = new Date(params.date)

  return (
    <div>
      <main className="flex h-[75vh] w-screen flex-col items-center justify-center gap-4 border-b bg-[#f9f9f9] px-4 text-center dark:bg-background/50 sm:px-0">
        <div className="space-y-2">
          <h1 className="text-4xl font-thin">
            Make <span className="text-5xl font-bold italic">Timeline! </span>
          </h1>
          <p className="text-sm text-muted-foreground">
            See all the photos taken on one date.
          </p>
        </div>

        <div className="flex gap-2">
          <DatePicker
            variant="link"
            placeholder="Pick a date"
            defaultDate={date}
          />
        </div>
      </main>

      <Timeline date={formatToApi(date)} />
    </div>
  )
}
