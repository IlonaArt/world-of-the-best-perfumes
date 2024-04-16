import { Box, Flex } from '@chakra-ui/react'
import AlphabetSorting from './AlphabetSorting'
import PriceSorting from './PriceSorting'
import BrandFilter from './BrandFilter'
import DiscountFilter from './DiscountFilter'
import GenderFilter from './GenderFilter'
import SortingButton from './SortingButton'
import FilterButton from './FilterButton'

interface FiltersProps {
  onAlphabetSort: () => void
}

const Filters = ({ onAlphabetSort }: FiltersProps) => {
  return (
    <Flex
      flexShrink={0}
      minW={{ base: 'auto', xl: '296px' }}
      justify={{ base: 'space-between', xl: 'initial' }}
      direction={{ base: 'row', xl: 'column' }}
      mb={{ base: 0, xl: 5 }}
      gap="40px"
    >
      <Box>
        <SortingButton />
        <Box display={{ base: 'none', xl: 'block' }}>
          <label htmlFor="a-z"></label>
          <AlphabetSorting onAlphabetSort={onAlphabetSort} />
          <label htmlFor="price"></label>
          <PriceSorting />
        </Box>
      </Box>
      <Box>
        <FilterButton />
        <Box display={{ base: 'none', xl: 'block' }}>
          <label htmlFor="brand"></label>
          <BrandFilter />
          <label htmlFor="discount"></label>
          <DiscountFilter />
          <label htmlFor="gender"></label>
          <GenderFilter />
        </Box>
      </Box>
    </Flex>
  )
}

export default Filters
