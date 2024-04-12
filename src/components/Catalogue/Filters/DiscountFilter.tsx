import { Select } from '@chakra-ui/react'

const DiscountFilter = () => {
  return (
    <Select
      defaultValue="all discounts"
      size="lg"
      variant="outline"
      name="discount"
      id="discount"
      mb={5}
      backgroundColor="white"
      borderColor="transparent"
      filter="drop-shadow(2px 2px 4px #DDD9D6)"
      cursor="pointer"
    >
      <option value="all discounts">All discounts</option>
      {/* next one does filter with and without discounts */}
      <option value="under €100">Under €100</option>
    </Select>
  )
}

export default DiscountFilter
