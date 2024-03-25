import RootLayout from '../components/RootLayout'
import { Box, Heading } from '@chakra-ui/react'

const IndexPage = () => {
  return (
    <RootLayout page="home" title="Home | World of the best perfumes">
      <Box
        px={{ base: '16px', lg: '40px', xl: '100px' }}
        pt={{ base: '40px', xl: '60px' }}
        pb={{ base: '40px', xl: '80px' }}
      >
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="light"
          lineHeight={{ base: '3xl', md: '4xl' }}
          letterSpacing="-1px"
        >
          Welcome to our world of the best perfumes!
        </Heading>
      </Box>
    </RootLayout>
  )
}

export default IndexPage
