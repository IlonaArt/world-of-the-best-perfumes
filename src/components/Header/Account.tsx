import React from 'react'
import Image from 'next/image'
import accountIcon from '../../public/account.svg'
import { Flex, Text } from '@chakra-ui/react'
import theme from '../../../theme'

const Account = () => {
  return (
    <Flex as="a" href="#" alignItems="center">
      <Text 
        as="span"
        display={{ base: "none", md: "block" }} 
        mr="12px" 
        fontSize={theme.fontSizes.lg} 
        lineHeight={theme.lineHeights.lg} 
        color={theme.colors.white}
        _hover={{
          color: theme.colors.beige,
        }}
      >
        Account
      </Text>
      <Image priority src={accountIcon} alt="account icon" />
    </Flex>
  )
}

export default Account
