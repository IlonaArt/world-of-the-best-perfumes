import PerfumeImage from './PerfumeImage'
import NextLink from 'next/link'
import { Button, Flex, GridItem, Heading, Link, Text } from '@chakra-ui/react'
import HeartIcon from '../../../public/heart-icon.svg'
import { useState } from 'react'
import styles from './Card.module.css'
import CardPrice from './CardPrice'
import { Users } from '../../Login/LoginModal'

interface CardProps {
  photo: string
  title: string
  brand: string
  price: Array<number>
  discount: Array<number>
  volume: Array<number>
}

// by clicking on the heart we should change the flag from false to true and back
// this flag should be in the data

const Card = ({ photo, title, brand, price, discount, volume }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const currentUser = localStorage.getItem('loggedIn')
    if (!currentUser) return false
    const userEmail = JSON.parse(currentUser).email
    const dataUsers: Users = JSON.parse(localStorage.getItem('users'))

    const userIndex = dataUsers.findIndex(user => user[userEmail])
    const user = dataUsers[userIndex]
    const userData = user[userEmail]
    return userData.wishlists.some(wishlist =>
      wishlist.perfumes.some(perfume => perfume.title === title),
    )
  })

  const toggleFavorite = () => {
    const currentUser = localStorage.getItem('loggedIn')
    if (!currentUser) return // TODO: open to login modal

    const userEmail = JSON.parse(currentUser).email
    const dataUsers: Users = JSON.parse(localStorage.getItem('users'))

    const userIndex = dataUsers.findIndex(user => user[userEmail])
    const user = dataUsers[userIndex]
    const userData = user[userEmail]

    const wishlistIndex = userData.wishlists.findIndex(wishlist => wishlist.isSelected)
    const wishlist = userData.wishlists[wishlistIndex] ?? {
      isSelected: true,
      name: 'Default',
      perfumes: [],
    }

    const isPerfumeInWishlist = userData.wishlists.some(wishlist =>
      wishlist.perfumes.some(perfume => perfume.title === title),
    )
    if (isPerfumeInWishlist) {
      wishlist.perfumes = wishlist.perfumes.filter(perfume => perfume.title !== title)
    } else {
      wishlist.perfumes.push({
        photo,
        title,
        brand,
        price,
        discount,
        volume,
      })
    }
    userData.wishlists[wishlistIndex] = wishlist
    dataUsers[userIndex][userEmail] = userData
    localStorage.setItem('users', JSON.stringify(dataUsers))
    setIsFavorite((prevIsFavorite: boolean) => !prevIsFavorite)
  }

  return (
    <GridItem
      display="flex"
      flexDirection="column"
      as="li"
      position="relative"
      bg="white"
      filter="drop-shadow(#E9E9E9 0 4px 10px)"
      borderRadius="sm"
      pb={{ base: 4, md: 6 }}
      pt={{ base: '44px', md: 6 }}
      px={{ base: 3, md: 6 }}
    >
      <Flex
        direction={{ base: 'row', md: 'column' }}
        align={{ base: 'flex-start', md: 'center' }}
        gap={{ base: 0, md: '10px' }}
        mb={6}
      >
        <PerfumeImage photo={photo} title={title} />
        <Flex direction="column" alignItems={{ base: 'flex-start', md: 'center' }}>
          <Heading
            as="h2"
            fontSize="lg"
            lineHeight="lg"
            mb={{ base: 2, md: 1 }}
            color="black"
            textAlign="center"
          >
            {title}
          </Heading>
          <Text
            as="span"
            fontSize="md"
            lineHeight="lg"
            textAlign="center"
            mb={3}
            color="black"
          >
            {brand}
          </Text>
          <Flex as="ul" gap={2} listStyleType="none">
            {volume.map(ml => (
              <Text
                key={ml}
                fontSize="xs"
                lineHeight="lg"
                as="li"
                color="black"
                py="2px"
                px="6px"
                border="1px solid"
                borderRadius="sm"
              >
                {ml}ml
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="center" gap="6px" mb={4} mt="auto">
        <CardPrice price={price} discount={discount} />
      </Flex>

      <Button width="100%">Buy now</Button>
      <Button
        className={styles.heartIconButton}
        variant="transparent"
        position="absolute"
        top={4}
        right="10px"
        px={3}
        onClick={toggleFavorite}
      >
        <HeartIcon
          className={styles.heartIcon}
          fill={isFavorite ? 'var(--chakra-colors-attention)' : 'transparent'}
        />
      </Button>
      <Link
        as={NextLink}
        href=""
        _before={{
          position: 'absolute',
          content: '""',
          top: 20,
          left: 0,
          right: 0,
          bottom: 70,
        }}
      />
    </GridItem>
  )
}

export default Card
