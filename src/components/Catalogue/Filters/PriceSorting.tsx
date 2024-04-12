import { Select } from '@chakra-ui/react'

const PriceSorting = () => {
  return (
    <Select
      defaultValue="lower-price"
      size="lg"
      variant="outline"
      name="price"
      id="price"
      backgroundColor="white"
      borderColor="transparent"
      filter="drop-shadow(2px 2px 4px #DDD9D6)"
      cursor="pointer"
    >
      <option value="lower price">Lower price</option>
      <option value="higher price">Higher price</option>
    </Select>
  )
}

export default PriceSorting
