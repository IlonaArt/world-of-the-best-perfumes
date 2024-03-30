import Image from 'next/image'
import PerfumeImage from './PerfumeImage'
import NextLink from 'next/link'
import { Button, Flex, GridItem, Heading, Link, Text } from '@chakra-ui/react'
import heartIconUnfilled from '../../../public/heart-icon.svg'
import heartIconFilled from '../../../public/heart-icon_filled.svg'
import { useState } from 'react'
import styles from './Card.module.css'
import CardPrice from './CardPrice'

interface CardProps {
  photo: string
  title: string
  brand: string
  price: Array<number>
  discount: Array<number>
  volume: Array<number>
}

const Card = ({ photo, title, brand, price, discount, volume }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <GridItem
      width="100%"
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
          >
            {brand}
          </Heading>
          <Text as="span" fontSize="md" lineHeight="lg" mb={3} color="black">
            {title}
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
      <Flex justify="center" gap="6px" mb={4}>
        <CardPrice price={price} discount={discount} />
      </Flex>

      <Button width="100%">Buy now</Button>
      <Button variant="transparent" position="absolute" top={4} right="10px" px={3}>
        <Image
          className={styles.heartIcon}
          src={isFavorite ? heartIconFilled : heartIconUnfilled}
          alt="Add to favorites"
          onClick={() => setIsFavorite(!isFavorite)}
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
