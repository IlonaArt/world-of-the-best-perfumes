import { Box, Grid, Text, Spinner } from '@chakra-ui/react'
import Card from './Card'
import Pagination from '../../Pagination'
import { type Perfume } from '../../../interfaces'
import { useUnit } from 'effector-react'
import { $currentPage, $pages, changeUrlParamsEffect } from '../model'

interface PerfumeListProps {
  data: Perfume[]
  error: any
  loading: boolean
}

const PerfumeList = ({ data, error, loading }: PerfumeListProps) => {
  const [currentPage, pages, changeUrlParams] = useUnit([
    $currentPage,
    $pages,
    changeUrlParamsEffect,
  ])

  const changePage = (page: number) => {
    changeUrlParams({ page })
  }

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Text>{error}</Text>
  }

  if (!data) return null

  return (
    <Box flexGrow={1}>
      <Grid
        as="ul"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          '2xl': 'repeat(4, 1fr)',
        }}
        gap={{ base: '16px', lg: '40px' }}
        listStyleType="none"
        mb={{ base: '30px', lg: '60px' }}
      >
        {data.map(item => (
          <Card
            key={item.id}
            id={item.id}
            photo={item.photo}
            title={item.title}
            brand={item.brand}
            price={item.price}
            discount={item.discount}
            volume={item.volume}
          />
        ))}
      </Grid>
      <Pagination pages={pages} currentPage={currentPage} onChange={changePage} />
    </Box>
  )
}

export default PerfumeList
