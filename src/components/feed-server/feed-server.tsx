import { subMonths } from 'date-fns'

import { formatToApi } from '@/utils/format-to-api'
import { apodFeed } from '@/services/planetary'
import { FeedClient } from '../feed-client'

const FeedServer = async () => {
  const startDate = subMonths(new Date(), 1)
  const endDate = new Date()

  const content = await apodFeed(formatToApi(startDate), formatToApi(endDate))

  if (!content) return <></>

  return <FeedClient initialContent={content} />
}

export default FeedServer
