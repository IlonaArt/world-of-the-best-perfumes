import { Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Page } from '../interfaces'

interface NavigationProps {
  page: Page
}

const Navigation = ({ page }: NavigationProps) => {
  return (
    <Flex
      px={{ base: 4, lg: '100px' }}
      py={{ base: 4, lg: 5 }}
      gap={{ base: 4, lg: 10 }}
      bg="bgNav"
    >
      <Link
        fontSize="md"
        lineHeight="md"
        _hover={{ textDecoration: 'none' }}
        fontWeight={page === 'home' && 'bold'}
        as={NextLink}
        href="/"
      >
        Home
      </Link>
      <Link
        fontSize="md"
        lineHeight="md"
        _hover={{ textDecoration: 'none' }}
        fontWeight={page === 'catalogue' && 'bold'}
        as={NextLink}
        href="/catalogue"
      >
        Catalogue
      </Link>
    </Flex>
  )
}

export default Navigation
