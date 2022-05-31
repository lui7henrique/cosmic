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
