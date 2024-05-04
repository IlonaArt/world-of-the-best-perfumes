import { Box, Button } from '@chakra-ui/react'
import BrandFilter from './BrandFilter'
import FilterButton from './FilterButton'
import { useUnit } from 'effector-react'
import { $filters, changeUrlParamsEffect } from '../model'
import PriceFilter from './PriceFilter'

const ALLOWED_FILTERS = ['brand', 'minPrice', 'maxPrice'] as const

const Filters = () => {
  const [filters, changeUrlParams] = useUnit([$filters, changeUrlParamsEffect])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const filters = Object.fromEntries(formData.entries())
    Object.entries(filters).forEach(([key, value]) => {
      if (!ALLOWED_FILTERS.includes(key as any)) delete filters[key]
      if (
        value === '' ||
        (key === 'brand' && value === 'All brands') ||
        ((key === 'minPrice' || key === 'maxPrice') &&
          (Number.isNaN(Number(value)) || Number(value) < 0))
      ) {
        filters[key] = undefined
      }
    })
    changeUrlParams({ filters })
  }

  return (
    <Box>
      <FilterButton />
      <Box display={{ base: 'none', xl: 'block' }}>
        <form onSubmit={handleSubmit}>
          <BrandFilter brand={filters?.brand} />
          <PriceFilter />
          <Button type="submit" height="auto" width="100%" mt={6}>
            Apply filters
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default Filters
