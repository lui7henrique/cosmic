import { apod } from '@/services/planetary'
import { format, subMonths } from 'date-fns'
import { FeedApodClient } from './feed-apod-client'

const Feed = async () => {
  const startDate = format(subMonths(new Date(), 1), 'yyyy-MM-dd')
  const endDate = format(new Date(), 'yyyy-MM-dd')

  const content = await apod(startDate, endDate)

  if (!content) return <></>

  return <FeedApodClient initialContent={content} />
}

export default Feed
