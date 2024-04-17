import { Select } from '@chakra-ui/react'
import { PriceSortType } from '../../../interfaces'

interface PriceSortingProps {
  onPriceSort: (sortType: PriceSortType) => void
}

const PriceSorting = ({ onPriceSort }: PriceSortingProps) => {
  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value as PriceSortType
    onPriceSort(selectedOption)
  }

  return (
    <Select
      size="lg"
      variant="outline"
      name="price"
      id="price"
      backgroundColor="white"
      borderColor="transparent"
      filter="drop-shadow(2px 2px 4px #DDD9D6)"
      cursor="pointer"
      onChange={onHandleChange}
    >
      <option value="none" defaultChecked>
        Price
      </option>
      <option value="desc">To lower price</option>
      <option value="asc">To higher price</option>
    </Select>
  )
}

export default PriceSorting
