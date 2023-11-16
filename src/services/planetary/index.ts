import axios from 'axios'
import { Apod, ApodItem } from './types'
import { addYears, differenceInYears } from 'date-fns'
import { formatToApi } from '@/utils/format-to-api'

export const planetary = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  params: {
    api_key: process.env.NEXT_PUBLIC_NASA_API_KEY,
  },
})

export const apodFeed = async (startDate: string, endDate: string) => {
  try {
    const { data } = await planetary.get<Apod>('/apod', {
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    })

    return data.reverse()
  } catch (e) {
    console.log({ e })
  }
}

export const apodDate = async (date: string) => {
  try {
    const { data } = await planetary.get<ApodItem>('/apod', {
      params: {
        date,
      },
    })

    return data
  } catch (e) {
    console.log({ e })
  }
}

export const apodTimeline = async (date: string) => {
  const dateObj = new Date(date)
  const today = new Date()

  const years = differenceInYears(today, dateObj) + 1

  const timeline = await Promise.all(
    Array.from({ length: years }).map(async (_, index) => {
      const iterateDate = formatToApi(addYears(dateObj, index))

      const response = await apodDate(iterateDate)

      return response
    }),
  )

  const filteredTimeline = timeline
    .filter((item) => item !== undefined)
    .reverse() as ApodItem[]

  return filteredTimeline
}
