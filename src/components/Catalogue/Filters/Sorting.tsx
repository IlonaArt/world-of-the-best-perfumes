import { Select } from '@chakra-ui/react'
import { SortType } from '../../../interfaces'

interface SortingProps {
  onSort: (sortType: SortType) => void
}

const Sorting = ({ onSort }: SortingProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value as SortType
    onSort(selectedOption)
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
      onChange={handleChange}
    >
      <option value="asc-alphabet" defaultChecked>
        A-Z
      </option>
      <option value="desc-alphabet">Z-A</option>
      <option value="desc-price">To lower price</option>
      <option value="asc-price">To higher price</option>
    </Select>
  )
}

export default Sorting
