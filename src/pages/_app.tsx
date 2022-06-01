/* eslint-disable @next/next/no-page-custom-font */
import { ChakraProvider } from "@chakra-ui/react"
import AOS from "aos"
import "aos/dist/aos.css"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import { useEffect } from "react"
import { theme } from "styles/theme"

import SEO from "../../next-seo.config"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 250
    })
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Everyday a different picture or video of the universe, with a short explanation professional astronomer!"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <NextNProgress
          color="#FFF"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
