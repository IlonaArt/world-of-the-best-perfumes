import React, { useState, useEffect } from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import {
  Previous,
  Paginator,
  PageGroup,
  Page,
  Next,
  generatePages,
} from 'chakra-paginator'

interface PaginationProps {
  amount: number
}

const Pagination = ({ amount }: PaginationProps) => {
  const itemLimit = 3
  const [pagesQuantity, setPagesQuantity] = useState(0)
  const [curPage, setCurPage] = useState(0)

  const normalStyles = {
    textDecoration: 'underline',
  }

  const activeStyles = {
    fontWEight: 'semibold',
  }

  const handlePageChange = page => {
    setCurPage(page)
  }

  useEffect(() => {
    const pagesTotal = Math.ceil(amount / itemLimit)

    setPagesQuantity(pagesTotal)
  }, [amount])

  return (
    <Box>
      <Flex p={2}>
        <Spacer />
        <Paginator onPageChange={handlePageChange} pagesQuantity={pagesQuantity - 1}>
          <Previous bg="white">{'<'}</Previous>
          <PageGroup>
            {generatePages({
              pagesQuantity,
              currentPage: curPage,
              innerLimit: itemLimit,
              outerLimit: itemLimit,
            })?.map(page => <Page key={`paginator_page_${page}`} page={page} />)}
          </PageGroup>
          <Next bg="white">{'>'}</Next>
        </Paginator>
      </Flex>
    </Box>
  )
}

export default Pagination
