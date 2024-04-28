import { Box, Button } from '@chakra-ui/react'
import BrandFilter from './BrandFilter'
import FilterButton from './FilterButton'
import { useUnit } from 'effector-react'
import { $filters, changeUrlParamsEffect } from '../model'

const Filters = () => {
  const [filters, changeUrlParams] = useUnit([$filters, changeUrlParamsEffect])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const filters = Object.fromEntries(formData.entries())
    if (filters.brand === 'All brands') {
      filters.brand = undefined
    }
    changeUrlParams({ filters })
  }

  return (
    <Box>
      <FilterButton />
      <Box display={{ base: 'none', xl: 'block' }}>
        <form onSubmit={handleSubmit}>
          <BrandFilter brand={filters?.brand} />
          {/* <PriceFilter /> */}
          <Button type="submit" height="auto" width="100%">
            Apply filters
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default Filters
