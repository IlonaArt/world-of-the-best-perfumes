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
          display={{ base: 'none', md: 'flex' }}
          gap={3}
          fontSize="lg"
          lineHeight="lg"
          color="white"
          _hover={{
            color: 'beige',
          }}
        >
          Login
          <AccountIcon />
        </Text>
      </Flex>
      {showLoginModal && <LoginModal isOpen={showLoginModal} onClose={onClose} />}
    </>
  )
}

export default Login
