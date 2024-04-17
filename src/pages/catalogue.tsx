import RootLayout from '../components/RootLayout'
import { Box, Heading, Flex, Spinner } from '@chakra-ui/react'
import PerfumeList from '../components/Catalogue/PerfumeList/PerfumeList'
import Filters from '../components/Catalogue/Filters/Filters'
import { useGate, useUnit } from 'effector-react'
import {
  $data,
  $error,
  PerfumeGate,
  fetchDataSideEffect,
} from '../components/Catalogue/model'
import { useEffect, useState } from 'react'
import { Perfume, PriceSortType, SortType } from '../interfaces'

const CataloguePage = () => {
  useGate(PerfumeGate)
  const [data, error, loading] = useUnit([$data, $error, fetchDataSideEffect.pending])
  const [sortedData, setSortedData] = useState<Perfume[] | null>(null)

  useEffect(() => {
    if (!data) return

    const newSortedData = [...data].sort((perfume1, perfume2) => {
      if (perfume1.brand < perfume2.brand) {
        return -1
      }
      if (perfume1.brand > perfume2.brand) {
        return 1
      }
      return 0
    })
    setSortedData(newSortedData)
  }, [loading])

  // switch case
  const onAlphabetSort = (sortType: SortType) => {
    const newSortedData = [...sortedData].sort((perfume1, perfume2) => {
      if (perfume1.brand < perfume2.brand) {
        return sortType === 'desc' ? 1 : -1
      }
      if (perfume1.brand > perfume2.brand) {
        return sortType === 'desc' ? -1 : 1
      }
      return 0
    })
    setSortedData(newSortedData)
  }

  const onPriceSort = (sortType: PriceSortType) => {
    if (sortType !== 'none') {
      const newSortedData = [...sortedData].sort((perfume1, perfume2) => {
        const finalPrice1 =
          perfume1.discount.length > 0 ? perfume1.discount[0] : perfume1.price[0]
        const finalPrice2 =
          perfume2.discount.length > 0 ? perfume2.discount[0] : perfume2.price[0]
        if (finalPrice1 < finalPrice2) {
          return sortType === 'asc' ? -1 : 1
        }
        if (finalPrice1 > finalPrice2) {
          return sortType === 'asc' ? 1 : -1
        }
        return 0
      })

      setSortedData(newSortedData)
    }

    if (sortType === 'none') {
      onAlphabetSort('asc')
    }
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
          <Filters onAlphabetSort={onAlphabetSort} onPriceSort={onPriceSort} />
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
