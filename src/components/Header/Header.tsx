import React, { useEffect, useState } from 'react'
import LogoIcon from '../../public/logo.svg'
import Login from './Login'
import Cart from './Cart'
import Wishlist from './Wishlist'
import { Box, Flex, Text } from '@chakra-ui/react'

const Header = () => {
  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('loggedIn')
    if (userFromLocalStorage) {
      setUserName(userFromLocalStorage)
    }
  }, [])

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
        {userName ? (
          <Text fontSize="lg" lineHeight="lg" color="white">
            Hi, {userName}!
          </Text>
        ) : (
          <Login />
        )}
        <Cart />
        <Wishlist />
      </Flex>
    </Flex>
  )
}

export default Header
