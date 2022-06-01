import { SearchIcon } from "@chakra-ui/icons"
import { Flex, Heading, Text, IconButton, VStack, Box } from "@chakra-ui/react"
import { FieldDate } from "components/Form/FieldDate"
import { add, differenceInYears, format } from "date-fns"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import CountUp from "react-countup"
import { useForm, Controller } from "react-hook-form"

type FormData = {
  birthDay: Date
}

export const TimelineBanner = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    setValue
  } = useForm<FormData>()

  const { push, query } = useRouter()
  const date = query.date as string

  const onSubmit = async (data: FormData) => {
    try {
      const date = format(new Date(data.birthDay), "MM-dd-yyyy")

      await push(`/timeline/${date}`)
    } catch (err: unknown) {}
  }

  useEffect(() => {
    date && setValue("birthDay", new Date(date))
  }, [date, setValue])

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
          maxWidth="1280px"
        >
          {date ? (
            <>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "3xl", lg: "6xl" }}
                fontWeight={200}
              >
                {format(new Date(date), "dd MMMM, ")}
                {""}
                <Text as="i" fontWeight="bold">
                  <CountUp
                    end={+format(new Date(date), "yyyy")}
                    duration={5}
                    start={
                      +format(
                        add(new Date(date), {
                          years:
                            differenceInYears(new Date(), new Date(date)) + 1
                        }),
                        "yyyy"
                      )
                    }
                  />
                  .
                </Text>
              </Heading>
            </>
          ) : (
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "3xl", lg: "6xl" }}
              fontWeight={200}
              data-aos="fade-right"
              data-aos-delay="150"
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
          )}

          <Flex w="100%">
            <Box w="100%" data-aos="fade-right" data-aos-delay="300">
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
              data-aos="fade-left"
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
            Or see all the photos taken in chronological order by clicking{" "}
            <Link href="/" passHref>
              <Text as="a" color="white">
                here
              </Text>
            </Link>
            .
          </Text>
        </VStack>
      </Flex>
    </>
  )
}
