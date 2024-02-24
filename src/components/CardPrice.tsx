import { Text } from '@chakra-ui/react'
import theme from '../theme'

interface CardPriceProps {
  price: Array<number>
  discount: Array<number>
}

const CardPrice = ({ price, discount }: CardPriceProps) => {
  return (
    <>
      <Text as="span" fontSize="sm" lineHeight="sm" color={theme.colors.black}>
        from&nbsp;
      </Text>
      <Text
        as="b"
        fontSize="xl"
        lineHeight="sm"
        color={theme.colors.black}
        decoration={discount.length > 0 && 'line-through'}
      >
        €{price[0]}
      </Text>
      {discount.length > 0 && (
        <Text as="b" fontSize="xl" lineHeight="sm" color={theme.colors.attention}>
          €{discount[0]}
        </Text>
      )}
    </>
  )
}

export default CardPrice
