import { NextSeo } from "next-seo"
import { TimelineTemplate } from "templates/Timeline"

export default function Timeline() {
  return (
    <>
      <NextSeo
        title="NASAGRAM"
        description="Make a timeline with all the photos taken by NASA on your birthday!"
        canonical="https://nasa-gram.vercel.app/"
        openGraph={{
          url: "https://nasa-gram.vercel.app/",
          title: "NASAGRAM",
          description:
            "Make a timeline with all the photos taken by NASA on your birthday!",
          images: [
            {
              url: "https://apod.nasa.gov/apod/image/2205/DiamondMoonWSMALL.jpg",
              width: 1920,
              height: 1080,
              alt: "A Jewel on the Flower Moon"
            }
          ]
        }}
      />
      <TimelineTemplate />
    </>
  )
}
