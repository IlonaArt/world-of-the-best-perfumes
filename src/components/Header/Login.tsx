import React from 'react'
import AccountIcon from '../../public/account.svg'
import { Flex, Text, useDisclosure } from '@chakra-ui/react'
import LoginModal from '../Login/LoginModal'

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex as="button" alignItems="center" onClick={onOpen}>
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
      {isOpen && <LoginModal onClose={onClose} />}
    </>
  )
}

export default Login
