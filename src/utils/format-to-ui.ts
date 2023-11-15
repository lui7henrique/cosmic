import { format as f } from 'date-fns'

export const formatToUI = (date: Date, format = 'PPP') => {
  const formattedDate = new Date(
    date.valueOf() + date.getTimezoneOffset() * 60 * 1000,
  )

  return f(formattedDate, format)
}
