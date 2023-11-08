import axios from 'axios'
import { Apod } from './types'

const planetary = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  params: {
    api_key: process.env.NEXT_PUBLIC_NASA_API_KEY,
  },
})

export const apod = async (startDate: string, endDate: string) => {
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
