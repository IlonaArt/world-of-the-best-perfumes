import React, { ReactNode } from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme'
import { Box } from '@chakra-ui/react'

interface Props {
  children?: ReactNode
  title?: string
}

const RootLayout = ({ children, title = 'This is the default title' }: Props) => (
  <Box bg={theme.colors.brand.bg}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </Box>
)

export default RootLayout
