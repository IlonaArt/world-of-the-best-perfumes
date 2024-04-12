import RootLayout from '../components/RootLayout'
import { Box, Heading, Flex, Img, Text, Select, Spinner } from '@chakra-ui/react'
import PerfumeList from '../components/Catalogue/PerfumeList/PerfumeList'
import filterIcon from '../public/filter.svg'
import SortingIcon from '../public/sorting.svg'
import styles from '../styles.module.css'
import { useBreakpointValue, useBreakpoint } from '@chakra-ui/react'
import Sorting from '../components/Catalogue/Filters/SortingButton'
import AlphabetSorting from '../components/Catalogue/Filters/AlphabetSorting'
import Filters from '../components/Catalogue/Filters/Filters'
import { useGate, useUnit } from 'effector-react'
import {
  $data,
  $error,
  PerfumeGate,
  fetchDataSideEffect,
} from '../components/Catalogue/model'
import { useEffect, useState } from 'react'
import { Perfume } from '../interfaces'

const CataloguePage = () => {
  useGate(PerfumeGate)
  const [data, error, loading] = useUnit([$data, $error, fetchDataSideEffect.pending])
  const [sortedData, setSortedData] = useState<Perfume[] | null>(null)

  useEffect(() => {
    setSortedData(data)
  }, [loading])

  console.log(sortedData, 'sortedData')

  const onAscend = () => {
    const newSortedData = [...sortedData].sort((perfume1, perfume2) => {
      if (perfume1.brand < perfume2.brand) {
        return -1
      }
      if (perfume1.brand > perfume2.brand) {
        return 1
      }
      return 0
    })
    setSortedData(newSortedData)
  }

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
          <Filters onAscend={onAscend} />
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
