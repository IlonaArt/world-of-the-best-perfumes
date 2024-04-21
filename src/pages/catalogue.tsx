import RootLayout from '../components/RootLayout'
import { Box, Heading, Flex, Spinner } from '@chakra-ui/react'
import PerfumeList from '../components/Catalogue/PerfumeList/PerfumeList'
import Filters from '../components/Catalogue/Filters/Filters'
import { useGate, useUnit } from 'effector-react'
import {
  $error,
  $sortedData,
  dataSorted,
  PerfumeGate,
  fetchDataSideEffect,
} from '../components/Catalogue/model'

const CataloguePage = () => {
  useGate(PerfumeGate)
  const [sortedData, sort, error, loading] = useUnit([
    $sortedData,
    dataSorted,
    $error,
    fetchDataSideEffect.pending,
  ])

  return (
    <RootLayout page="catalogue" title="Catalogue">
      <Box px={{ base: 4, lg: 10, xl: '100px' }} bg="mainBg">
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="light"
          lineHeight={{ base: '3xl', md: '4xl' }}
          letterSpacing="-1px"
          mt={{ base: 10, xl: '60px' }}
          mb={{ base: 6, xl: '60px' }}
        >
          Catalogue
        </Heading>
        <Flex
          gap={{ base: 5, xl: '60px' }}
          direction={{ base: 'column', xl: 'row' }}
          mb={{ base: 10, xl: '60px' }}
        >
          <Filters onSort={sort} />
          {sortedData ? (
            <PerfumeList data={sortedData} error={error} loading={loading} />
          ) : (
            <Spinner />
          )}
        </Flex>
      </Box>
    </RootLayout>
  )
}

export default CataloguePage
