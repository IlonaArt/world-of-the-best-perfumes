import React from 'react'
import Image from 'next/image'
import heartIcon from '../../public/heart.svg'
import { Flex, Text } from '@chakra-ui/react'
import theme from '../../theme'

const Wishlist = () => {
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
        Wishlist
      </Text>
      <Image priority src={heartIcon} alt="wishlist icon" />
    </Flex>
  )
}

export default Wishlist
