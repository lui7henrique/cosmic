import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  CloseButton,
  Image,
  Heading,
  Text,
  Flex,
  AspectRatio,
  Avatar,
  IconButton,
  Box,
  useDisclosure,
  useBreakpointValue
} from "@chakra-ui/react"
import { format, formatDistance, add } from "date-fns"
import { HiDotsHorizontal } from "react-icons/hi"
import { Media } from "types/media"

import { ModalViewOptionsImage } from "../VideoOptionsMedia"

interface ModalViewImageProps {
  isOpen: boolean
  onClose: () => void
  media: Media
}

export function ModalViewImage({
  isOpen,
  onClose,
  media
}: ModalViewImageProps): JSX.Element {
  const { copyright, date, explanation, media_type, url, title } = media
  const {
    isOpen: isOpenModalViewOptions,
    onOpen: onOpenModalViewOptions,
    onClose: onCloseModalViewOptions
  } = useDisclosure()
  const iconSize = useBreakpointValue({
    base: "xs",
    md: "sm"
  })

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="full" blockScrollOnMount>
        <ModalOverlay>
          <ModalContent mx="auto" w="auto" h="auto" bg="transparent" margin={8}>
            <CloseButton
              position="absolute"
              left={4}
              top={4}
              cursor="pointer"
              zIndex={25}
              onClick={onClose}
              _active={{
                boxShadow: "none"
              }}
              _focus={{
                boxShadow: "none"
              }}
            />

            <ModalBody
              p={0}
              bg="gray.900"
              d={{ base: "block", lg: "flex" }}
              direction={{ base: "column", lg: "row" }}
              borderRadius="5px"
              maxWidth="935px"
            >
              <AspectRatio ratio={1} w="100%">
                {media_type === "image" ? (
                  <Image
                    src={url}
                    alt={title}
                    width="100%"
                    objectFit="cover"
                    borderLeftRadius={{ base: "0px", lg: "5px" }}
                    borderTopRadius={{ base: "5px", lg: "0" }}
                  />
                ) : (
                  <iframe
                    src={url}
                    title={title}
                    style={{
                      borderRadius: "5px 5px 0 0"
                    }}
                    allowFullScreen
                  />
                )}
              </AspectRatio>
              <Flex direction="column" w={{ base: "100%", lg: "50%" }}>
                <Flex
                  p={4}
                  borderBottom="1px solid #1f1f1f"
                  alignItems="center"
                >
                  <Avatar name={copyright} size={iconSize} />
                  <Flex w="100%" justifyContent="space-between">
                    <Box ml={2}>
                      <Text fontSize={{ base: 14, lg: 16 }}>
                        {copyright ?? "Unknown"}
                      </Text>
                      <Flex>
                        <Text fontSize={{ base: 10, lg: 12 }} opacity={0.5}>
                          {format(
                            add(new Date(date), {
                              days: 1
                            }),
                            "dd MMMM yyyy"
                          )}{" "}
                          •{" "}
                          {formatDistance(new Date(date), new Date(), {
                            addSuffix: true
                          })}
                        </Text>
                      </Flex>
                    </Box>
                    <IconButton
                      aria-label="Open options modal"
                      icon={<HiDotsHorizontal size={25} />}
                      bg="transparent"
                      _hover={{
                        bg: "transparent"
                      }}
                      cursor="pointer"
                      zIndex={25}
                      _active={{
                        boxShadow: "none"
                      }}
                      _focus={{
                        boxShadow: "none"
                      }}
                      onClick={onOpenModalViewOptions}
                    />
                  </Flex>
                </Flex>

                <Flex p={4} direction="column">
                  <Heading
                    as="h2"
                    fontSize={{ base: 16, lg: 24 }}
                    fontWeight={300}
                  >
                    {title}
                  </Heading>
                  <Text
                    lineHeight="30px"
                    maxHeight="100%"
                    overflowY="auto"
                    fontSize={14}
                  >
                    {explanation}
                  </Text>
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      <ModalViewOptionsImage
        isOpen={isOpenModalViewOptions}
        onClose={onCloseModalViewOptions}
        media={media}
      />
    </>
  )
}
