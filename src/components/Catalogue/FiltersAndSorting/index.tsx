import { Flex } from '@chakra-ui/react'
import Sorting from './Sorting'
import Filters from './Filters'

const FiltersAndSorting = () => {
  return (
    <Flex
      flexShrink={0}
      minW={{ base: 'auto', xl: '296px' }}
      justify={{ base: 'space-between', xl: 'initial' }}
      direction={{ base: 'row', xl: 'column' }}
      mb="0"
      gap="40px"
    >
      <Sorting />
      <Filters />
    </Flex>
  )
}

export default FiltersAndSorting
