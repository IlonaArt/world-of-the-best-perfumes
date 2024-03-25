import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import logoIcon from '../../public/logo.svg'
import phoneIcon from '../../public/phone.svg'
import envelopeIcon from '../../public/envelope.svg'

const Footer = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems={{ base: 'center', md: 'initial' }}
      gap={{ base: '40px', lg: '70px' }}
      py={8}
      px={{ base: '16px', lg: '40px', xl: '100px' }}
      bg="black"
      marginTop="auto"
    >
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'initial' }}
        gap={{ base: '36px', lg: '100px' }}
      >
        <Box
          as="a"
          href="#"
          width={{ base: '48px', md: '76px' }}
          height={{ base: '54px', md: '86px' }}
        >
          <Image priority src={logoIcon} alt="Website logo" />
        </Box>
        <Box>
          <Text
            fontSize="lg"
            lineHeight="lg"
            fontWeight={500}
            color="white"
            mb="18px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            About
          </Text>
          <Box as="ul">
            <Text
              as="li"
              fontSize="md"
              lineHeight="lg"
              mb={3}
              color="white"
              textAlign={{ base: 'center', md: 'left' }}
            >
              About us
            </Text>
            <Text
              as="li"
              fontSize="md"
              lineHeight="lg"
              color="white"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Events
            </Text>
          </Box>
        </Box>
        <Box>
          <Text
            fontSize="lg"
            lineHeight="lg"
            fontWeight={500}
            color="white"
            mb="18px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            Address
          </Text>
          <Box as="ul">
            <Text
              as="li"
              fontSize="md"
              lineHeight="lg"
              color="white"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Sunday Morning Street, 122
            </Text>
          </Box>
        </Box>
        <Box>
          <Text
            fontSize="lg"
            lineHeight="lg"
            fontWeight={500}
            color="white"
            mb="18px"
            textAlign={{ base: 'center', md: 'left' }}
          >
            Contact
          </Text>
          <Box as="ul">
            <Flex as="li" mb={3} justifyContent={{ base: 'center', md: 'left' }}>
              <Image priority src={phoneIcon} alt="phone icon" />
              <Text fontSize="md" lineHeight="lg" color="white" ml={1}>
                +31 000 0000000
              </Text>
            </Flex>
            <Flex as="li" mb={3} justifyContent={{ base: 'center', md: 'left' }}>
              <Image priority src={envelopeIcon} alt="phone icon" />
              <Text fontSize="md" lineHeight="lg" color="white" ml={2}>
                Email us
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Text fontSize="sm" lineHeight="sm" color="white">
        2024 - WOBP - All rights reserved
      </Text>
    </Flex>
  )
}

export default Footer
