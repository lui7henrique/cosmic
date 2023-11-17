'use client'

import { useState } from 'react'
import { CalendarIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { QueryClient, QueryClientProvider } from 'react-query'
import { DialogDate } from '../date-dialog'
import Link from 'next/link'
import { formatToApi } from '@/utils/format-to-api'
import { formatToUI } from '@/utils/format-to-ui'

const queryClient = new QueryClient()

type DatePickerProps = {
  placeholder: string
  variant?: 'link' | 'dialog'
  defaultDate?: Date
}

export function DatePicker({
  placeholder,
  variant = 'dialog',
  defaultDate = new Date(),
}: DatePickerProps) {
  const [date, setDate] = useState<Date>(defaultDate)

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[250px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
            aria-label="Open popover date"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />

            {date ? formatToUI(date) : <span>{placeholder}</span>}

            <span className="sr-only">Open popover date</span>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
            fromYear={1995}
            toYear={new Date().getFullYear()}
            disabled={{ after: new Date(), before: new Date('06/16/1995') }}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {variant === 'dialog' ? (
        <QueryClientProvider client={queryClient}>
          <DialogDate date={date ?? new Date()}>
            <Button
              size="icon"
              variant="outline"
              disabled={!date}
              aria-label="Open dialog date"
            >
              <MagnifyingGlassIcon className="h-4 w-4" />
              <span className="sr-only">Open dialog date</span>
            </Button>
          </DialogDate>
        </QueryClientProvider>
      ) : (
        <Button
          size="icon"
          variant="outline"
          disabled={!date}
          asChild
          aria-label="Open timeline page"
        >
          <Link href={`/timeline/${formatToApi(date)}`}>
            <MagnifyingGlassIcon className="h-4 w-4" />
            <span className="sr-only">Open timeline page</span>
          </Link>
        </Button>
      )}
    </>
  )
}
