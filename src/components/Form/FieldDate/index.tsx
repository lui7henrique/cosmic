// Vendors
import {
  Input,
  FormLabel,
  FormControl,
  FormErrorMessage,
  InputProps,
  chakra
} from "@chakra-ui/react"
import React from "react"
import DatePicker, { ReactDatePickerProps } from "react-datepicker"
import { FieldError } from "react-hook-form"
import InputMask from "react-input-mask"

// Styles
import "react-datepicker/dist/react-datepicker.css"

// Components

// Styles
import "react-datepicker/dist/react-datepicker.css"
import { FieldDateWrapper } from "../FieldDateWrapper"

// Interfaces
export type FieldDateProps = ReactDatePickerProps & {
  name: string
  label?: string
  error?: FieldError
  inputProps?: InputProps
  mask?: string
}

const ChakraDatePicker = chakra(DatePicker)

export const FieldDate: React.FC<FieldDateProps> = (
  props: FieldDateProps
): JSX.Element => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {
    name,
    label,
    error,
    placeholderText,
    selected,
    inputProps,
    mask,
    ...rest
  } = props

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel
          htmlFor={name}
          fontSize={{ base: "sm", lg: "lg" }}
          color="brandGray.700"
          textTransform="uppercase"
        >
          {label}
        </FormLabel>
      )}

      <FieldDateWrapper>
        <ChakraDatePicker
          id={name}
          name={name}
          customInput={
            <Input
              backgroundColor="#FFFFFF1A"
              backdropFilter="15px"
              border="none"
              _focus={{
                boxShadow: "none"
              }}
              borderRadius="0"
              fontSize={16}
              as={mask ? InputMask : undefined}
              mask={(mask && mask) as string | (string | RegExp)[]}
              autoComplete="false"
              height="48px"
              {...inputProps}
            />
          }
          selected={selected && new Date(selected)}
          placeholderText={placeholderText || "Select a date of birth..."}
          position="relative"
          popperPlacement="top-start"
          {...rest}
        />
      </FieldDateWrapper>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}
