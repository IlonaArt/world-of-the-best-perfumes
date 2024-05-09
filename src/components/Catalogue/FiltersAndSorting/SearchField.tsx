import SearchIcon from '../../../public/search.svg'
import { Box, Input } from '@chakra-ui/react'
import styles from './Filters.module.css'

const SearchField = () => {
  return (
    <Box as="label" aria-label="search" position="relative">
      <SearchIcon className={styles.searchIcon} aria-hidden />
      <Input
        name="search"
        type="search"
        placeholder="Search by brand or name"
        backgroundColor="white"
        size="lg"
        fontSize="md"
        borderColor="transparent"
        filter="drop-shadow(2px 2px 4px #DDD9D6)"
        pl={10}
        autoComplete="off"
      />
    </Box>
  )
}

export default SearchField
