import axios from "axios"

export const planetary = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  params: {
    api_key: process.env.NEXT_PUBLIC_NASA_API
  }
})
