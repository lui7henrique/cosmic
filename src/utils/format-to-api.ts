import { format } from 'date-fns'

export const formatToApi = (date: Date) => {
  const formattedDate = new Date(
    date.valueOf() + date.getTimezoneOffset() * 60 * 1000,
  )

  return format(formattedDate, 'yyyy-MM-dd')
}
