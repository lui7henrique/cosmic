import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Heading,
  Link
} from "@chakra-ui/react"
import { useMemo } from "react"
import { Media } from "templates/Home/types"

interface ModalViewImageProps {
  isOpen: boolean
  onClose: () => void
  media: Media
}

type Option = {
  label: string
  action?: () => void
  href?: string
  isExternal?: boolean
  hasBorder?: boolean
  download?: string
}

const Option = ({ action, label, href, isExternal, hasBorder }: Option) => {
  const baseStyles = {
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 400,
    padding: 4,
    borderBottom: hasBorder ? "1px solid #1f1f1f" : "",
    width: "100%",
    color: "gray.200"
  }

  const baseOptions = {
    heading: (
      <Heading as="h5" textAlign="center" onClick={action} {...baseStyles}>
        {label}
      </Heading>
    ),
    link: (
      <Link
        textAlign="center"
        _hover={{
          textDecoration: "none"
        }}
        _active={{
          boxShadow: "none"
        }}
        _focus={{
          boxShadow: "none"
        }}
        isExternal={isExternal}
        href={href}
        {...baseStyles}
      >
        {label}
      </Link>
    )
  }
  return baseOptions[href ? "link" : "heading"]
}

export function ModalViewOptionsImage({
  isOpen,
  onClose,
  media
}: ModalViewImageProps): JSX.Element {
  const options: Option[] = useMemo(
    () => [
      media.url
        ? {
            label: "Open original",
            href: media.url,
            isExternal: true
          }
        : ({} as Option),
      media.hdurl && media.hdurl !== media.url
        ? {
            label: "Open original (HD)",
            href: media.hdurl,
            isExternal: true
          }
        : ({} as Option)
    ],
    [media]
  )
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="md"
        blockScrollOnMount
        isCentered
      >
        <ModalOverlay>
          <ModalContent mx="auto" h="auto" bg="transparent" margin={8}>
            <ModalBody
              p={0}
              bg="gray.900"
              d="flex"
              flexDirection="column"
              alignItems="center"
              borderRadius="5px"
            >
              {options.map((option, index) =>
                Object.keys(option).length ? (
                  <Option
                    {...option}
                    key={JSON.stringify(option)}
                    hasBorder={index !== options.length - 1}
                  />
                ) : (
                  <></>
                )
              )}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}
