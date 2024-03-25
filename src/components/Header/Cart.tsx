import React from 'react'
import Image from 'next/image'
import cartIcon from '../../public/cart.svg'
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
      <Image priority src={cartIcon} alt="cart icon" />
    </Flex>
  )
}

export default Cart
