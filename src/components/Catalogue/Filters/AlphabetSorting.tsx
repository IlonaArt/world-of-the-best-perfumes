import { Select } from '@chakra-ui/react'

interface AlphabetSortingProps {
  onAlphabetSort: () => void
}

const AlphabetSorting = ({ onAlphabetSort }: AlphabetSortingProps) => {
  return (
    <Select
      defaultValue="a-z"
      size="lg"
      variant="outline"
      name="alphabet"
      id="a-z"
      mb={5}
      backgroundColor="white"
      borderColor="transparent"
      filter="drop-shadow(2px 2px 4px #DDD9D6)"
      color="black"
      cursor="pointer"
      onChange={onAlphabetSort}
    >
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
    </Select>
  )
}

export default AlphabetSorting
