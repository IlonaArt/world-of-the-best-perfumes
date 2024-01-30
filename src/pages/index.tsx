import Header from '../components/Header/Header'
import RootLayout from '../components/RootLayout'
import { Heading } from '@chakra-ui/react'

const IndexPage = () => (
  <RootLayout title="Home | World of the best perfumes">
    <Header />
    <Heading 
      as="h1"
      fontSize={{ base: "2xl", md: "4xl" }}
      fontWeight="light"
      lineHeight={{ base: "3xl", md: "4xl" }}
      letterSpacing="-2px"
      mt={{ base: "40px", md: "60px" }}
      mb={{ base: "50px", md: "80px" }}
      px={{ base: "16px", md: "100px" }}
    >
      Welcome to our world of the best perfumes!
    </Heading>
  </RootLayout>
)

export default IndexPage
