import PerfumeImage from './PerfumeImage'
import NextLink from 'next/link'
import { Button, Flex, GridItem, Heading, Link, Text } from '@chakra-ui/react'
import HeartIcon from '../../../public/heart-icon.svg'
import { useEffect, useState } from 'react'
import styles from './Card.module.css'
import CardPrice from './CardPrice'
import { useUser } from '../../../contexts/user-context/UserContext'

interface CardProps {
  id: number
  photo: string
  title: string
  brand: string
  price: Array<number>
  discount: Array<number>
  volume: Array<number>
}

const Card = ({ id, photo, title, brand, price, discount, volume }: CardProps) => {
  const { user, updateUser } = useUser()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (!user) return
    const { wishlists } = user
    setIsFavorite(
      wishlists.some(wishlist => wishlist.perfumes.some(perfumeId => perfumeId === id)),
    )
  }, [user, id])
  // move this function to a separate file
  // create a separate functionality for the local storage

  const toggleFavorite = () => {
    if (!user) return // TODO: open to login modal

    fetch('/api/updateFavorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: user.email,
        wishlistName: 'Default',
        productId: id,
      }),
    })
      .then(response => {
        if (!response.ok) {
          return
        }
        return response.json()
      })
      .then(data => {
        if (!data) return

        const { wishlists } = data
        updateUser({
          name: user.name,
          email: user.email,
          wishlists,
        })
        setIsFavorite((prevIsFavorite: boolean) => !prevIsFavorite)
      })
      .catch(() => {
        console.error('Unable to update favorites')
      })
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
        href={`/perfume/${id}`}
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
