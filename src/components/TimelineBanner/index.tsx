import { SearchIcon } from "@chakra-ui/icons"
import { Flex, Heading, Text, IconButton, Progress } from "@chakra-ui/react"
import { FieldDate } from "components/Form/FieldDate"
import { format } from "date-fns"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"

type FormData = {
  birthDay: Date
}

export const TimelineBanner = () => {
  // hooks
  const { control, handleSubmit } = useForm<FormData>()

  // states
  const [isLoading, setIsLoading] = useState(false)
  const { push } = useRouter()

  // functions
  const onSubmit = async (data: FormData) => {
    setIsLoading(true)

    try {
      const date = format(new Date(data.birthDay), "MM-dd-yyyy")

      push(`/timeline/${date}`)
    } catch (err: unknown) {
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
        background="linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(/banner2.jpeg)"
        backgroundSize="contain"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Flex
          direction="column"
          alignItems="center"
          as="form"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "3xl", lg: "6xl" }}
            fontWeight={200}
          >
            Make a{" "}
            <Text
              as="i"
              fontSize={{ base: "6xl", md: "6xl", lg: "8xl" }}
              fontWeight="bold"
            >
              {" "}
              TIMELINE!
            </Text>
          </Heading>

          <Text fontSize={{ base: 18, lg: 26 }} fontWeight={300} mb={4}></Text>

          <Flex w="100%">
            <Controller
              name="birthDay"
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
                  placeholderText="Select your birth day!"
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
            <Text fontSize={{ base: 12, lg: 16 }} fontWeight={300} mt={2}>
              Or see all the photos taken in chronological order by clicking{" "}
              <Link href="/" passHref>
                <Text as="a" color="white">
                  here
                </Text>
              </Link>
              .
            </Text>
          </a>
        </Link>
      </Flex>
    </>
  )
}
