import { TimelineBanner } from "components/TimelineBanner"
import { TimelineGallery } from "components/TimelineGallery"
import { Media } from "types/media"

export type TimelineByDateTemplateProps = {
  media: Media[]
  date: string
}

export const TimelineByDateTemplate = ({
  media,
  date
}: TimelineByDateTemplateProps) => {
  return (
    <>
      <TimelineBanner date={date} />
      <TimelineGallery media={media} />
    </>
  )
}
