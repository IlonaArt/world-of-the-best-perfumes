import SearchField from './SearchField'
import React from 'react'
import Image from 'next/image'
import logoIcon from '../../public/logo.svg'
import Account from './Account'
import Cart from './Cart'
import Wishlist from './Wishlist'
import { Box, Flex } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      as="header"
      backgroundColor="black"
      py={{ base: '6px', lg: '12px' }}
      px={{ base: '16px', lg: '40px', xl: '100px' }}
    >
      <Box
        as="a"
        href="#"
        width={{ base: '48px', md: '76px' }}
        height={{ base: '54px', md: '86px' }}
      >
        <Image priority src={logoIcon} alt="Website logo" />
      </Box>
      <Flex alignItems="center" gap={{ base: '14px', md: '40px' }}>
        <SearchField />
        <Account />
        <Cart />
        <Wishlist />
      </Flex>
    </Flex>
  )
}

export default Header
