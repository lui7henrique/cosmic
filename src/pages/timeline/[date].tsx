import { add, differenceInYears, format } from "date-fns"
import { GetServerSideProps } from "next"
import { NextSeo } from "next-seo"
import { planetary } from "services/planetary"

import {
  TimelineByDateTemplate,
  TimelineByDateTemplateProps
} from "templates/TimelineByDate"
import { Media } from "types/media"

type TimelineByDateProps = TimelineByDateTemplateProps

export default function TimelineByDate(props: TimelineByDateProps) {
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
      <TimelineByDateTemplate {...props} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const date = ctx.query?.date

  if (date && typeof date === "string") {
    const birthDate = new Date(date)
    const years = differenceInYears(new Date(), birthDate) + 1

    const media = await Promise.all(
      Array.from({ length: years }).map(async (_, index) => {
        const date = format(
          add(new Date(birthDate), {
            years: index
          }),
          "yyyy-MM-dd"
        )

        const { data } = await planetary.get<Media[]>("/apod", {
          params: {
            date: date
          }
        })

        return data
      })
    )

    return {
      props: {
        media: media.filter((i) => i).reverse()
      }
    }
  }

  return {
    props: {}
  }
}
