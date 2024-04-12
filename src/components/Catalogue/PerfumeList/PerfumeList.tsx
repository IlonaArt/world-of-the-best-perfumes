import { Box, Grid, Text, Spinner } from '@chakra-ui/react'
import { useGate, useUnit } from 'effector-react'
import { PerfumeGate, $data, fetchDataSideEffect, $error } from '../model'
import Card from './Card'
import Pagination from '../Pagination'
import { Perfume } from '../../../interfaces'

interface PerfumeListProps {
  data: Perfume[]
  error: any
  loading: boolean
}

const PerfumeList = ({ data, error, loading }: PerfumeListProps) => {
  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <Text>{error}</Text>
  }

  if (!data) return null

  return (
    <Box>
      <Grid
        as="ul"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          '2xl': 'repeat(4, 1fr)',
        }}
        alignSelf="flex-end"
        flexGrow={1}
        gap={{ base: '16px', lg: '40px' }}
        listStyleType="none"
      >
        {data.map(item => (
          <Card
            key={item?.title}
            photo={item?.photo}
            title={item?.title}
            brand={item?.brand}
            price={item?.price}
            discount={item?.discount}
            volume={item?.volume}
          />
        ))}
      </Grid>
      {/* <Pagination amount={data.length} /> */}
    </Box>
  )
}

export default PerfumeList
