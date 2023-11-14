import axios from 'axios'
import { Apod, ApodItem } from './types'

export const planetary = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  params: {
    api_key: process.env.NEXT_PUBLIC_NASA_API_KEY || process.env.NASA_API_KEY,
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
