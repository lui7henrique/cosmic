import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        "scroll-behavior": "smooth"
      },
      body: {
        background: "gray.1000",
        color: "gray.300",
        fontFamily: "Roboto, sans-serif",
        "h1, h2, h3, h4, h5, h6": {
          fontWeight: "bold",
          color: "gray.200"
        },
        "&::-webkit-scrollbar": {
          width: "5px"
        },
        "&::-webkit-scrollbar-track": {
          width: "5px"
        },
        "&::-webkit-scrollbar-thumb": {
          background: "gray.100",
          borderRadius: "24px"
        },
        "div.react-datepicker, div.react-datepicker__header": {
          "border-color": "#1f1f1f",
          "z-index:": 25,
          background: "#1f1f1f",
          padding: "8px"
        },
        "div.react-datepicker__day": {
          color: "gray.200",
          "border-radius": "5px",
          "&:hover": {
            background: "gray.900"
          }
        },
        "div.react-datepicker__day--selected": {
          background: "gray.900"
        },
        "div.react-datepicker__current-month": {
          color: "gray.200"
        },
        "div.react-datepicker__day--disabled": {
          opacity: 0.3
        },
        "div.react-datepicker__day-name": {
          color: "gray.200"
        },
        "select.react-datepicker__month-select, select.react-datepicker__year-select":
          {
            color: "gray.200",
            background: "gray.900",
            padding: "8px",
            margin: "8px 0",
            "border-radius": "5px",
            "&:focus": {
              "box-shadow": "none"
            }
          }
      }
    }
  },
  colors: {
    gray: {
      100: "#f0f3f5",
      200: "#c9d1d9",
      300: "#8b949e",
      400: "#898d8f",
      500: "#74787b",
      800: "#1f1f1f",
      900: "#101010",
      1000: "#000000"
    },
    blue: {
      500: "#0032a0",
      800: "#0f181f"
    },
    red: {
      500: "#e3002b"
    }
  }
})
