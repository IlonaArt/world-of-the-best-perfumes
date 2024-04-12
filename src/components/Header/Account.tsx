import React from 'react'
import AccountIcon from '../../public/account.svg'
import { Flex, Text } from '@chakra-ui/react'

const Account = () => {
  return (
    <Flex as="a" href="#" alignItems="center">
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
        Account
      </Text>
      <AccountIcon />
    </Flex>
  )
}

export default Account
