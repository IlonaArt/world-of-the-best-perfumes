import React from 'react'
import Image from 'next/image'
import accountIcon from '../../public/account.svg'
import { Flex, Text } from '@chakra-ui/react'
import theme from '../../theme'

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
      <Image priority src={accountIcon} alt="account icon" />
    </Flex>
  )
}

export default Account
