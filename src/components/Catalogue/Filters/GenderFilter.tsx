import { Select } from '@chakra-ui/react'

const GenderFilter = () => {
  return (
    <Select
      size="lg"
      variant="outline"
      name="gender"
      id="gender"
      mb={5}
      backgroundColor="white"
      borderColor="transparent"
      filter="drop-shadow(2px 2px 4px #DDD9D6)"
      cursor="pointer"
    >
      <option value="unisex">Unisex</option>
      <option value="women">Women</option>
      <option value="men">Men</option>
    </Select>
  )
}

export default GenderFilter
