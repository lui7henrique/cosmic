import { format } from 'date-fns'

export const formatToApi = (date: Date) => format(date, 'yyyy-MM-dd')
