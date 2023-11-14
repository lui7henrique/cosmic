'use client'

import { useState } from 'react'
import { CalendarIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'

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

const queryClient = new QueryClient()

type DatePickerProps = {
  placeholder: string
}

export function DatePicker({ placeholder }: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())

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
          >
            <CalendarIcon className="mr-2 h-4 w-4" />

            {date ? format(date, 'PPP') : <span>{placeholder}</span>}
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
            disabled={{ after: new Date() }}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <QueryClientProvider client={queryClient}>
        <DialogDate date={date ?? new Date()}>
          <Button size="icon" variant="outline" disabled={!date}>
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Button>
        </DialogDate>
      </QueryClientProvider>
    </>
  )
}
