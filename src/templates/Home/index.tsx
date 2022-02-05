import { Box, Flex, CircularProgress } from "@chakra-ui/react"
import { Gallery } from "components/Gallery"
import { MainBanner } from "components/MainBanner"
import { format, sub } from "date-fns"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { planetary } from "services/planetary"

import { Media } from "./types"

type HomeTemplateProps = {
  media: Media[]
}

export const HomeTemplate = ({ media: initialMedia }: HomeTemplateProps) => {
  const [media, setMedia] = useState(initialMedia)
  const [isLoading, setIsLoading] = useState(true)

  const fetchMedia = async () => {
    setIsLoading(true)

    try {
      const { data } = await planetary.get<Media[]>("/apod", {
        params: {
          start_date: format(
            sub(new Date(), {
              days: media.length + 14
            }),
            "yyyy-MM-dd"
          ),
          end_date: format(
            sub(new Date(), {
              days: media.length
            }),
            "yyyy-MM-dd"
          )
        }
      })

      const newData = data.reverse()

      setMedia([...media, ...newData])
    } catch (err: unknown) {
      setIsLoading(false)
    } finally {
      setIsLoading(true)
    }
  }

  return (
    <>
      <MainBanner />
      <Box maxWidth="1280px" mx="auto" p={{ base: 0, lg: 8 }}>
        <InfiniteScroll
          dataLength={media.length}
          next={fetchMedia}
          hasMore={isLoading}
          loader={
            <Flex w="full" justify="center" overflowY="hidden" py={4}>
              <CircularProgress
                isIndeterminate
                color="gray.200"
                sx={{
                  ".chakra-progress__track": {
                    stroke: "transparent"
                  }
                }}
              />
            </Flex>
          }
        >
          <Gallery media={media} />
        </InfiniteScroll>
      </Box>
    </>
  )
}
