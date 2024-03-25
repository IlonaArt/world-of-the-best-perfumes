import React from 'react'
import Image from 'next/image'
import heartIcon from '../../public/heart.svg'
import { Flex, Text } from '@chakra-ui/react'

const Wishlist = () => {
  return (
    <Flex as="a" href="#" alignItems="center">
      <Text
        as="span"
        display={{ base: 'none', md: 'block' }}
        mr={3}
        fontSize="lg"
        lineHeight="lg"
        color="white"
        _hover={{
          color: 'beige',
        }}
      >
        Wishlist
      </Text>
      <Image priority src={heartIcon} alt="wishlist icon" />
    </Flex>
  )
}

export default Wishlist
