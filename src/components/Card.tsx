// import Image from 'next/image'
import PerfumeImage from './PerfumeImage'
import NextLink from 'next/link'
import { Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import heartIconUnfilled from '../public/heart-icon.svg'
import heartIconFilled from '../public/heart-icon_filled.svg'
import { useState } from 'react'
import theme from '../../theme'

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
    <Flex
      direction="column"
      align="center"
      width="33.33%"
      maxW="266px"
      as="li"
      position="relative"
      bg="white"
      filter="drop-shadow(#E9E9E9 0 4px 10px)"
      borderRadius="8px"
      padding="24px"
    >
      <PerfumeImage photo={photo} title={title} />
      <Heading
        as="h2"
        fontSize="lg"
        lineHeight="lg"
        mb={1}
        textAlign="center"
        color={theme.colors.black}
      >
        {brand}
      </Heading>
      <Text
        as="span"
        fontSize="md"
        lineHeight="lg"
        textAlign="center"
        mb={3}
        color={theme.colors.black}
      >
        {title}
      </Text>
      <Flex as="ul" gap={2} listStyleType="none">
        {volume.map(ml => (
          <Text
            fontSize="xs"
            lineHeight="lg"
            as="li"
            color={theme.colors.black}
            py="2px"
            px="6px"
            border="1px solid"
            borderRadius={theme.radii.sm}
          >
            {ml}ml
          </Text>
        ))}
      </Flex>
      <Text as="span" fontSize="sm" lineHeight="sm" color={theme.colors.black}>
        from&nbsp;
      </Text>
      <Text as="b" fontSize="xl" lineHeight="sm" color={theme.colors.black}>
        {price}
      </Text>
      <Text as="b" fontSize="xl" lineHeight="sm" color={theme.colors.attention}>
        {discount}
      </Text>
      <Button width="100%">Buy now</Button>
      <Image
        position="absolute"
        content='""'
        width="24px"
        height="24px"
        top="16px"
        right="16px"
        src={isFavorite ? heartIconFilled : heartIconUnfilled}
        alt=""
        onClick={() => setIsFavorite(!isFavorite)}
      />
      <Link
        as={NextLink}
        href=""
        _before={{
          position: 'absolute',
          content: '""',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </Flex>
  )
}

export default Card
