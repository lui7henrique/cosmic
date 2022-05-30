import { SearchIcon } from "@chakra-ui/icons"
import {
  Flex,
  Heading,
  Text,
  IconButton,
  useToast,
  useDisclosure,
  Progress
} from "@chakra-ui/react"
import { FieldDate } from "components/Form/FieldDate"
import { ModalViewImage } from "components/Modal/ViewMedia"
import { format } from "date-fns"
import Link from "next/link"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { planetary } from "services/planetary"
import { Media } from "templates/Home/types"

type FormData = {
  birthdate: Date
}

export const MainBanner = () => {
  // hooks
  const { control, handleSubmit } = useForm<FormData>()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast({
    position: "top-right"
  })

  // states
  const [media, setMedia] = useState<Media>({} as Media)
  const [isLoading, setIsLoading] = useState(false)

  // functions
  const onSubmit = async (data: FormData) => {
    setIsLoading(true)

    try {
      const { data: media } = await planetary.get<Media[]>("/apod", {
        params: {
          start_date: format(data.birthdate, "yyyy-MM-dd"),
          end_date: format(data.birthdate, "yyyy-MM-dd")
        }
      })
      setMedia(media[0])
      onOpen()
    } catch (err: unknown) {
      toast({
        title: "Error",
        description: "Something went wrong :(",
        status: "error"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Flex
        as="section"
        direction="column"
        width="full"
        height="95vh"
        background="linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(/earth.jpg)"
        backgroundSize="contain"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        alignItems="center"
        justifyContent="center"
        p={8}
      >
        <Flex
          direction="column"
          alignItems="center"
          as="form"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading as="h2" fontSize={{ base: 60, lg: 80 }} fontWeight={200}>
            Welcome,{" "}
            <i
              style={{
                fontWeight: 600,
                fontSize: "98px"
              }}
            >
              Earthling!
            </i>
          </Heading>

          <Text fontSize={{ base: 18, lg: 26 }} fontWeight={300} mb={4}></Text>

          <Flex w="100%">
            <Controller
              name="birthdate"
              control={control}
              render={({ field }) => (
                <FieldDate
                  dateFormat="dd/MM/yyyy"
                  mask="99/99/9999"
                  maxDate={new Date()}
                  minDate={new Date(1998, 0, 1)}
                  showYearDropdown
                  showMonthDropdown
                  name={field.name}
                  dropdownMode="select"
                  selected={field.value}
                  onChange={field.onChange}
                  autoComplete="off"
                  placeholderText="Discover the photo that was taken on your birth date."
                />
              )}
            />
            <IconButton
              aria-label="search"
              type="submit"
              ml={2}
              _focus={{ boxShadow: "none" }}
              icon={<SearchIcon />}
              isDisabled={isLoading}
              bgColor="gray.900"
              borderRadius="0"
              size="lg"
              _hover={{ bgColor: "gray.800" }}
            />
          </Flex>
          {isLoading && <Progress size="xs" isIndeterminate />}
        </Flex>

        <Link href="">
          <a>
            <Text fontSize={{ base: 12, lg: 14 }} fontWeight={300} mt={2}>
              Or make a timeline with all the photos taken on your birthdays
              clicking here.
            </Text>
          </a>
        </Link>
      </Flex>

      {media.title && (
        <ModalViewImage isOpen={isOpen} onClose={onClose} media={media} />
      )}
    </>
  )
}
