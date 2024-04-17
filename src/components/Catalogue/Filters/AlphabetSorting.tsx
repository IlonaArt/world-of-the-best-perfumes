import { Select } from '@chakra-ui/react'
import { SortType } from '../../../interfaces'

interface AlphabetSortingProps {
  onAlphabetSort: (sortType: SortType) => void
}

const AlphabetSorting = ({ onAlphabetSort }: AlphabetSortingProps) => {
  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value as SortType
    onAlphabetSort(selectedOption)
  }

  return (
    <Select
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
      onChange={onHandleChange}
    >
      <option value="asc" defaultChecked>
        A-Z
      </option>
      <option value="desc">Z-A</option>
    </Select>
  )
}

export default AlphabetSorting
