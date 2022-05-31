import { NextSeo } from "next-seo"
import { TimelineTemplate } from "templates/Timeline"

export default function Timeline() {
  return (
    <>
      <NextSeo
        title="NASAgram"
        description="Everyday a different picture or video of the universe, with a short explanation professional astronomer!"
        canonical="https://nasa-gram.vercel.app/"
        openGraph={{
          url: "https://nasa-gram.vercel.app/",
          title: "NASA Gallery",
          description:
            "Everyday a different picture or video of the universe, with a short explanation professional astronomer!",
          images: [
            {
              url: "https://nasa-gram.vercel.app/cover.jpg",
              width: 1920,
              height: 1080,
              alt: "A Solar Prominence from SOHO"
            }
          ]
        }}
      />
      <TimelineTemplate />
    </>
  )
}
