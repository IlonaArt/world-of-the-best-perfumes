import { Select } from '@chakra-ui/react'
import { SortType } from '../../../interfaces'
import { useUnit } from 'effector-react'
import { $sortType, changeUrlParamsEffect } from '../model'

const Sorting = () => {
  const [sortType, changeUrlParams] = useUnit([$sortType, changeUrlParamsEffect])
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value as SortType
    changeUrlParams({ sort: selectedOption })
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
      value={sortType}
      onChange={handleChange}
    >
      <option value="brand-asc">A-Z</option>
      <option value="brand-desc">Z-A</option>
      <option value="price-desc">To lower price</option>
      <option value="price-asc">To higher price</option>
    </Select>
  )
}

export default Sorting
