import React from 'react'
import CartIcon from '../../public/cart.svg'
import { Flex, Text } from '@chakra-ui/react'

const Cart = () => {
  return (
    <Flex as="a" href="#" alignItems="center">
      <Text
        as="span"
        display={{ base: 'none', md: 'block' }}
        mr="12px"
        fontSize="lg"
        lineHeight="lg"
        color="white"
        _hover={{
          color: 'beige',
        }}
      >
        Cart
      </Text>
      <CartIcon />
    </Flex>
  )
}

export default Cart
