import { Box, Flex, Heading } from '@chakra-ui/react'
import RootLayout from '../components/RootLayout'
import WishlistContent from '../components/WishlistContent/WishlistContent'

// we need to add a flag to the data (true|false) to indicate if the product is in the wishlist
// and then we have to add a function that will sort perfumes based on this flag
// and we are going to show here only perfumes with this flag=true

// we can request all perfumes from the effector and sort them in the component
// them we render the Cards with the perfumes that have the flag=true
// we pass all the props

const WishlistPage = () => {
  return (
    <RootLayout page="wishlist" title="Wishlist">
      <Box px={{ base: 4, lg: 10, xl: '100px' }} bg="mainBg" flexGrow={1}>
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="light"
          lineHeight={{ base: '3xl', md: '4xl' }}
          letterSpacing="-1px"
          mt={{ base: 10, xl: '60px' }}
          mb={{ base: 6, xl: '60px' }}
        >
          Wishlist
        </Heading>
        <Flex>
          <WishlistContent />
        </Flex>
      </Box>
    </RootLayout>
  )
}

export default WishlistPage
