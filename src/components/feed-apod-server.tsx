import { subMonths } from 'date-fns'
import { FeedApodClient } from './feed-apod-client'
import { formatToApi } from '@/utils/format-to-api'
import { apodFeed } from '@/services/planetary'

const Feed = async () => {
  const startDate = subMonths(new Date(), 1)
  const endDate = new Date()

  const content = await apodFeed(formatToApi(startDate), formatToApi(endDate))

  if (!content) return <></>

  return <FeedApodClient initialContent={content} />
}

export default Feed
