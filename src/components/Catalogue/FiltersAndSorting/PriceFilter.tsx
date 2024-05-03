import { Grid, Input } from '@chakra-ui/react'
import { useUnit } from 'effector-react'
import { $filters } from '../model'

const PriceFilter = () => {
  const filters = useUnit($filters)

  return (
    <fieldset>
      <legend>Price</legend>
      <Grid templateColumns="repeat(2, 1fr)" gap={3} mt="14px">
        <label>
          From
          <Input
            defaultValue={filters?.minPrice}
            type="number"
            name="minPrice"
            bg="white"
            filter="drop-shadow(2px 2px 4px #DDD9D6)"
            borderColor="transparent"
          />
        </label>
        <label>
          To
          <Input
            defaultValue={filters?.maxPrice}
            type="number"
            name="maxPrice"
            bg="white"
            filter="drop-shadow(2px 2px 4px #DDD9D6)"
            borderColor="transparent"
          />
        </label>
      </Grid>
    </fieldset>
  )
}

export default PriceFilter
