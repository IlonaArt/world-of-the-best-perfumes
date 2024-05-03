import SearchField from './SearchField'
import React from 'react'
import LogoIcon from '../../public/logo.svg'
import Login from './Login'
import Cart from './Cart'
import Wishlist from './Wishlist'
import { Box, Flex } from '@chakra-ui/react'

interface HeaderProps {
  onClose: () => void
  onOpen: () => void
  showLoginModal: boolean
}

const Header = ({ onClose, onOpen, showLoginModal }: HeaderProps) => {
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
        <LogoIcon />
      </Box>
      <Flex alignItems="center" gap={{ base: '14px', md: '40px' }}>
        <SearchField />
        <Login onClose={onClose} onOpen={onOpen} showLoginModal={showLoginModal} />
        <Cart />
        <Wishlist />
      </Flex>
    </Flex>
  )
}

export default Header
