import { Flex, Heading, Text } from '@chakra-ui/react'

const Cart = () => {
  return (
    <>
      <Heading
        as="h2"
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="light"
        lineHeight={{ base: '3xl', md: '4xl' }}
        letterSpacing="-1px"
        mt={{ base: '40px', xl: '60px' }}
        mb={{ base: '40px', xl: '80px' }}
      >
        Catalogue
      </Heading>
      <Flex>
        <Text>Your cart is empty now. Start adding your favs!</Text>
      </Flex>
    </>
  )
}

export default Cart
