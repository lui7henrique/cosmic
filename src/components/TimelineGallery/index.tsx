import {
  AspectRatio,
  Badge,
  Box,
  chakra,
  Flex,
  Heading,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react"
import { add, format } from "date-fns"
import Image from "next/image"
import { Media } from "types/media"

type TimelineGalleryProps = {
  media: Media[]
}

const ChakraNextImage = chakra(Image)

export const TimelineGallery = (props: TimelineGalleryProps) => {
  const { media } = props

  return (
    <VStack
      gap={16}
      mx="auto"
      maxWidth="1280px"
      w="full"
      alignItems="flex-start"
      py={8}
    >
      {media.map((item, index) => {
        const age = media.length - index - 1
        const date = format(
          add(new Date(item.date), {
            days: 1
          }),
          "dd MMMM yyyy"
        )

        const onRight = index % 2 === 0

        return (
          <Stack
            direction={{
              base: "column-reverse",
              lg: onRight ? "row" : "row-reverse"
            }}
            key={item.url}
            w="100%"
            gap={4}
            alignItems="flex-start"
          >
            <Flex
              direction="column"
              w={{ base: "100%", lg: "50%" }}
              px={{ base: 4, lg: 0 }}
            >
              <Box data-aos="fade-right" data-aos-delay="100">
                <Badge>{date}</Badge>
              </Box>

              <Heading
                as="h2"
                fontWeight="thin"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <Heading as="span" fontSize="5xl">
                  {age}.{" "}
                </Heading>
                {item.title}
              </Heading>

              <Text
                textAlign="justify"
                mt={2}
                fontSize={16}
                lineHeight={1.6}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                {item.explanation}
              </Text>
            </Flex>

            <AspectRatio w={{ base: "100%", lg: "50%" }} ratio={1}>
              {item.media_type === "image" ? (
                <ChakraNextImage
                  w="100%"
                  h="100%"
                  src={item.url}
                  objectFit="cover"
                  layout="fill"
                />
              ) : (
                <iframe
                  src={item.url}
                  title={item.title}
                  style={{
                    borderRadius: "0",
                    zIndex: 5,
                    pointerEvents: "none",
                    width: "100%",
                    height: "100%"
                  }}
                  allowFullScreen
                />
              )}
            </AspectRatio>
          </Stack>
        )
      })}
    </VStack>
  )
}
