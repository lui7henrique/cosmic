import { format, sub } from "date-fns"
import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import { planetary } from "services/planetary"
import { HomeTemplate } from "templates/Home"
import { Media } from "templates/Home/types"

type HomeProps = {
  media: Media[]
}

export default function Home({ media }: HomeProps) {
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
      <HomeTemplate media={media} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await planetary.get<Media[]>("/apod", {
    params: {
      start_date: format(
        sub(new Date(), {
          months: 1
        }),
        "yyyy-MM-dd"
      ),
      end_date: format(new Date(), "yyyy-MM-dd")
    }
  })

  const media = data.reverse() || []

  return {
    props: {
      media
    },
    revalidate: 60 * 60 * 24 //1 day
  }
}
