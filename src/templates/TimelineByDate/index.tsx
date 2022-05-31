import { TimelineBanner } from "components/TimelineBanner"
import { TimelineGallery } from "components/TimelineGallery"
import { Media } from "types/media"

export type TimelineByDateTemplateProps = {
  media: Media[]
}

export const TimelineByDateTemplate = ({
  media
}: TimelineByDateTemplateProps) => {
  return (
    <>
      <TimelineBanner />
      <TimelineGallery media={media} />
    </>
  )
}
