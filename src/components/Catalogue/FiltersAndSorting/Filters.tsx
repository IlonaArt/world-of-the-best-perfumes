import { Box, Button } from '@chakra-ui/react'
import BrandFilter from './BrandFilter'
import FilterButton from './FilterButton'
import { useUnit } from 'effector-react'
import { $filters, changeUrlParamsEffect } from '../model'
import styles from './Filters.module.css'
import PriceFilter from './PriceFilter'
import VolumeFilter from './VolumeFilter'
import SearchField from './SearchField'

const ALLOWED_FILTERS = [
  'search',
  'brand',
  'minPrice',
  'maxPrice',
  'volume',
  'minVolume',
  'maxVolume',
] as const

const NUMBERED_FILTERS = [
  'minPrice',
  'maxPrice',
  'volume',
  'minVolume',
  'maxVolume',
] as const

const Filters = () => {
  const [filters, changeUrlParams] = useUnit([$filters, changeUrlParamsEffect])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const filters = Object.fromEntries(formData.entries())
    Object.entries(filters).forEach(([key, value]) => {
      if (!ALLOWED_FILTERS.includes(key as any)) delete filters[key]
      if (
        typeof value !== 'string' ||
        value.trim() === '' ||
        (key === 'brand' && value === 'All brands') ||
        (NUMBERED_FILTERS.includes(key as any) &&
          (Number.isNaN(Number(value)) || Number(value) < 0))
      ) {
        filters[key] = undefined
      }
    })
    ALLOWED_FILTERS.forEach(key => {
      if (!filters[key]) {
        filters[key] = undefined
      }
    })
    changeUrlParams({ filters })
  }

  return (
    <Box>
      <FilterButton />
      <Box display={{ base: 'none', xl: 'block' }}>
        <form className={styles.filterForm} onSubmit={handleSubmit}>
          <SearchField />
          <BrandFilter brand={filters?.brand} />
          <PriceFilter />
          <VolumeFilter />
          <Button type="submit" height="auto" width="100%">
            Apply filters
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default Filters
