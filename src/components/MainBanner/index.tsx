import { SearchIcon } from "@chakra-ui/icons"
import {
  Flex,
  Heading,
  Text,
  IconButton,
  useToast,
  useDisclosure,
  VStack,
  Box
} from "@chakra-ui/react"
import { FieldDate } from "components/Form/FieldDate"
import { ModalViewImage } from "components/Modal/ViewMedia"
import { format } from "date-fns"
import Link from "next/link"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { planetary } from "services/planetary"
import { Media } from "types/media"

type FormData = {
  birthDate: Date
}

export const MainBanner = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormData>()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast({
    position: "top-right"
  })

  const [media, setMedia] = useState<Media>({} as Media)

  const onSubmit = async (data: FormData) => {
    const { birthDate } = data

    try {
      const { data: media } = await planetary.get<Media[]>("/apod", {
        params: {
          start_date: format(birthDate, "yyyy-MM-dd"),
          end_date: format(birthDate, "yyyy-MM-dd")
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
      >
        <VStack
          direction="column"
          as="form"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          w="100%"
          align="flex-start"
          spacing={2}
          px={{ base: 4, lg: 0 }}
          maxWidth="935px"
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "3xl", lg: "6xl" }}
            fontWeight={200}
            data-aos="fade-right"
            data-aos-delay="50"
          >
            Welcome,{" "}
            <Text
              as="i"
              fontSize={{ base: "6xl", md: "6xl", lg: "8xl" }}
              fontWeight="bold"
            >
              {" "}
              Earthling!
            </Text>
          </Heading>

          <Text fontSize={{ base: 18, lg: 26 }} fontWeight={300} mb={4}></Text>

          <Flex w="100%" data-aos="fade-right" data-aos-delay="150">
            <Box w="100%" data-aos="fade-right" data-aos-delay="300">
              <Controller
                name="birthDate"
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
            </Box>

            <IconButton
              aria-label="search"
              type="submit"
              ml={2}
              _focus={{ boxShadow: "none" }}
              icon={<SearchIcon />}
              isLoading={isSubmitting}
              bgColor="gray.900"
              borderRadius="0"
              size="lg"
              _hover={{ bgColor: "gray.800" }}
              data-aos="fade-right"
              data-aos-delay="400"
            />
          </Flex>

          <Text
            fontSize={{ base: 12, lg: 16 }}
            fontWeight={300}
            mt={2}
            data-aos="fade-up"
            data-aos-delay="400"
            textAlign="end"
            w="100%"
          >
            Or make a timeline with all the photos taken on your birthdays
            clicking{" "}
            <Link href="/timeline" passHref>
              <Text as="a" color="white">
                here
              </Text>
            </Link>
            .
          </Text>
        </VStack>
      </Flex>

      {media.title && (
        <ModalViewImage isOpen={isOpen} onClose={onClose} media={media} />
      )}
    </>
  )
}
