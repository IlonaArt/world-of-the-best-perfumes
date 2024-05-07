import React from 'react'
import AccountIcon from '../../public/account.svg'
import { Flex, Text } from '@chakra-ui/react'
import LoginModal from '../Login/LoginModal'

interface LoginProps {
  onOpen: () => void
  onClose: () => void
  showLoginModal: boolean
}

const Login = ({ onOpen, onClose, showLoginModal }: LoginProps) => {
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
      {showLoginModal && <LoginModal isOpen={showLoginModal} onClose={onClose} />}
    </>
  )
}

export default Login
