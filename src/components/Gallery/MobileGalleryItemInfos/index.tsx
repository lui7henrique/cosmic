import { Box, Flex, Avatar, Text } from "@chakra-ui/react"
import { formatDistance } from "date-fns"
import { Media } from "types/media"

type MobileGalleryItemInfosProps = {
  item: Media
}

export const MobileGalleryItemInfos = (props: MobileGalleryItemInfosProps) => {
  const { item } = props
  const { date, copyright, explanation } = item

  return (
    <Box p={2}>
      <Flex alignItems="center">
        <Avatar name={copyright} size="sm" />
        <Box ml={2}>
          <Text fontSize={{ base: 14, lg: 16 }}>{copyright ?? "Unknown"}</Text>
          <Flex>
            <Text fontSize={{ base: 10, lg: 12 }} opacity={0.5}>
              {formatDistance(new Date(date), new Date(), {
                addSuffix: true
              })}
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Text mt={2} noOfLines={3}>
        {explanation}
      </Text>
    </Box>
  )
}
