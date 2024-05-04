import { Button, Text, useBreakpoint } from '@chakra-ui/react'
import FilterIcon from '../../../public/filter.svg'

const FilterButton = () => {
  const breakpoint = useBreakpoint()

  return (
    <Button
      display="flex"
      fontWeight="normal"
      gap={1}
      padding={0}
      border={0}
      backgroundColor="transparent"
      _hover={{ backgroundColor: 'transparent', color: 'black' }}
    >
      {['sm', 'md', 'lg'].includes(breakpoint) && <FilterIcon aria-hidden />}
      <Text
        fontSize={{ base: 'sm', xl: 'lg' }}
        lineHeight={{ base: 'lg', xl: 'sm' }}
        mb={{ base: 0, xl: '14px' }}
      >
        Filters
      </Text>
    </Button>
  )
}

export default FilterButton
