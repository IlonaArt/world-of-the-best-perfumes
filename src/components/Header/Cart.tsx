import React from 'react'
import CartIcon from '../../public/cart.svg'
import { Flex, Text } from '@chakra-ui/react'

const Cart = () => {
  return (
    <Flex as="a" href="#" alignItems="center">
      <Text
        as="span"
        display={{ base: 'none', md: 'flex' }}
        gap={3}
        fontSize="lg"
        lineHeight="lg"
        color="white"
        _hover={{
          color: 'beige',
        }}
      >
        Cart
        <CartIcon />
      </Text>
    </Flex>
  )
}

export default Cart
