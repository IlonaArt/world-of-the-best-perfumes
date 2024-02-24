import React from 'react'
import Image from 'next/image'
import cartIcon from '../../public/cart.svg'
import { Flex, Text } from '@chakra-ui/react'
import theme from '../../theme'

const Cart = () => {
  return (
    <Flex as="a" href="#" alignItems="center">
      <Text
        as="span"
        display={{ base: 'none', md: 'block' }}
        mr="12px"
        fontSize={theme.fontSizes.lg}
        lineHeight={theme.lineHeights.lg}
        color={theme.colors.white}
        _hover={{
          color: theme.colors.beige,
        }}
      >
        Cart
      </Text>
      <Image priority src={cartIcon} alt="cart icon" />
    </Flex>
  )
}

export default Cart
