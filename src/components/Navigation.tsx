import { Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Page } from '../interfaces'

interface NavigationProps {
  page: Page
}

const Navigation = ({ page }: NavigationProps) => {
  return (
    <Flex>
      <Link
        _hover={{ textDecoration: 'none' }}
        fontWeight={page === 'home' && 'bold'}
        as={NextLink}
        href="/"
      >
        Home
      </Link>
      <Link
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
