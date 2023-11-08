export type ApodItem = {
  date: string
  explanation: string
  hdurl?: string
  media_type: string
  service_version: string
  title: string
  url: string
  copyright?: string
}

export type Apod = ApodItem[]
