import React, { useState } from 'react'
import AccountIcon from '../../public/account.svg'
import { Flex, Text } from '@chakra-ui/react'
import LoginModal from '../Login/LoginModal'

interface LoginProps {
  onClose: () => void
  onOpen: () => void
  showLoginModal: boolean
}

const Login = ({ onClose, onOpen, showLoginModal }: LoginProps) => {
  return (
    <>
      <Flex as="a" href="#" alignItems="center" onClick={onOpen}>
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
          Login
        </Text>
        <AccountIcon />
      </Flex>
      {showLoginModal && <LoginModal onClose={onClose} />}
    </>
  )
}

export default Login
