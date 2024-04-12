import React, { ReactNode } from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { Box } from '@chakra-ui/react'
import Header from './Header/Header'
import Navigation from './Navigation'
import { Page } from '../interfaces'
import Footer from './Footer/Footer'

interface Props {
  children?: ReactNode
  title?: string
  page: Page
}

const RootLayout = ({ children, title = 'World of the best perfumes', page }: Props) => (
  <Box className="root-layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
    <ChakraProvider theme={theme}>
      <Header />
      <Navigation page={page} />
      {children}
      <Footer />
    </ChakraProvider>
  </Box>
)

export default RootLayout
