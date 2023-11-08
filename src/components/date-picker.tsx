'use client'

import { useEffect, useState } from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import ReactInputMask from 'react-input-mask'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Input } from './ui/input'
import { formatRawDate } from '@/utils/date/format-raw-date'

type DatePickerProps = {
  placeholder: string
}

export function DatePicker({ placeholder }: DatePickerProps) {
  const [date, setDate] = useState<Date>()

  return (
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
        {/* <div className="p-2">
          <ReactInputMask
            mask="99/99/9999"
            placeholder="18/11/2002"
            onChange={(event) => {
              const { value } = event.target

              const newDate = formatRawDate(value)
              if (newDate) setDate(newDate)
            }}
          >
            <Input />
          </ReactInputMask>
        </div> */}

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          captionLayout="dropdown"
          fromYear={1995}
          toYear={new Date().getFullYear()}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
