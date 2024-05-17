import { Box, Flex, Link, Text } from '@chakra-ui/react'
import LogoIcon from '../../public/logo.svg'
import PhoneIcon from '../../public/phone.svg'
import EnvelopeIcon from '../../public/envelope.svg'
import NextLink from 'next/link'

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
          <LogoIcon />
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
          <Flex flexDirection="column">
            <Link
              as={NextLink}
              href="#"
              fontSize="md"
              lineHeight="lg"
              mb={3}
              color="white"
              textAlign={{ base: 'center', md: 'left' }}
              _hover={{ color: 'beige' }}
            >
              About us
            </Link>
            <Link
              as={NextLink}
              href="#"
              fontSize="md"
              lineHeight="lg"
              color="white"
              textAlign={{ base: 'center', md: 'left' }}
              _hover={{ color: 'beige' }}
            >
              Events
            </Link>
          </Flex>
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
          <Box>
            <Link
              as={NextLink}
              href="#"
              fontSize="md"
              lineHeight="lg"
              color="white"
              textAlign={{ base: 'center', md: 'left' }}
              _hover={{ color: 'beige' }}
            >
              Sunday Morning Street, 122
            </Link>
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
          <Flex flexDirection="column">
            <Flex
              as="a"
              href="tel:310000000000"
              mb={3}
              justifyContent={{ base: 'center', md: 'left' }}
            >
              <Text
                display="flex"
                fontSize="md"
                lineHeight="lg"
                color="white"
                gap={1}
                _hover={{
                  color: 'beige',
                }}
              >
                <PhoneIcon />
                +31 000 0000000
              </Text>
            </Flex>
            <Flex
              as="a"
              href="mailto:worldofbestperfumes@example.com"
              target="_blank"
              mb={3}
              justifyContent={{ base: 'center', md: 'left' }}
            >
              <Text
                display="flex"
                fontSize="md"
                lineHeight="lg"
                color="white"
                gap={2}
                _hover={{
                  color: 'beige',
                }}
              >
                <EnvelopeIcon />
                Email us
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Text fontSize="sm" lineHeight="sm" color="white">
        2024 - WOBP - All rights reserved
      </Text>
    </Flex>
  )
}

export default Footer
