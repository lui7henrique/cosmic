import { Box, useToken } from "@chakra-ui/react"
import { ReactNode } from "react"

type FieldDateWrapperProps = {
  children: ReactNode
}

export const FieldDateWrapper = (props: FieldDateWrapperProps) => {
  const { children } = props

  const [g200, g300, g800, g900] = useToken("colors", [
    "gray.200",
    "gray.300",
    "gray.800",
    "gray.900"
  ])

  return (
    <Box
      sx={{
        ".react-datepicker": {
          borderRadius: "0px",
          borderColor: g900,
          background: g900
        },

        ".react-datepicker__triangle": {
          display: "none"
        },

        // HEADER
        ".react-datepicker__current-month": {
          fontSize: "16px",
          color: g200,
          margin: "4px 0"
        },

        ".react-datepicker__header__dropdown": {
          display: "flex",
          width: "100%",
          gap: "4px",
          padding: "8px"
        },

        ".react-datepicker__header__dropdown select": {
          width: "100%",
          height: "32px",
          color: g200,
          background: g800,
          padding: "0 4px",
          "&:focus": {
            "box-shadow": "none",
            outline: "none"
          }
        },

        ".react-datepicker__month-dropdown-container": {
          width: "70%"
        },

        ".react-datepicker__year-dropdown-container": {
          width: "30%"
        },

        // HEADER - NAVIGATION
        ".react-datepicker__navigation": {
          marginTop: "10px"
        },

        ".react-datepicker__header": {
          borderColor: g900,
          background: g900
        },

        // HEADER - DAYS
        ".react-datepicker__day-names": {
          borderBottom: `1px solid ${g800}`
        },

        ".react-datepicker__day-name": {
          color: g200
        },

        // BODY - DAYS
        ".react-datepicker__day": {
          color: g300,
          borderRadius: 0,
          transition: "all 0.2s",

          "&:hover": {
            background: g800
          }
        },

        ".react-datepicker__day--selected": {
          color: g200,
          background: g800
        }

        // "div.react-datepicker__current-month": {
        //   color: "gray.200"
        // },
        // "div.react-datepicker__day--disabled": {
        //   opacity: 0.3
        // },
        // "div.react-datepicker__day-name": {
        //   color: "gray.200"
        // },
        // "select.react-datepicker__month-select, select.react-datepicker__year-select":
        //   {
        //
        //   }
      }}
    >
      {children}
    </Box>
  )
}
