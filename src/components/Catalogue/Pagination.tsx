import { Button, Flex, Input } from '@chakra-ui/react'
import { useUnit } from 'effector-react'
import { $currentPage, $pages, changeUrlParamsEffect } from './model'

const Pagination = () => {
  const [currentPage, pages, changeUrlParams] = useUnit([
    $currentPage,
    $pages,
    changeUrlParamsEffect,
  ])

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === pages

  const changePage = (page: number) => {
    changeUrlParams({ page })
  }

  const goToFirstPage = () => {
    if (isFirstPage) return
    changePage(1)
  }

  const goToLastPage = () => {
    if (isLastPage) return
    changePage(pages)
  }

  const goToPreviousPage = () => {
    if (isFirstPage) return
    changePage(currentPage - 1)
  }

  const goToNextPage = () => {
    if (isLastPage) return
    changePage(currentPage + 1)
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    let inputValue = Number(event.currentTarget.value)
    if (Number.isNaN(inputValue) || event.code !== 'Enter') return
    inputValue = Math.max(Math.min(inputValue, pages), 1)
    changePage(inputValue)
  }

  return (
    <Flex>
      <Button onClick={goToFirstPage} isDisabled={isFirstPage}>
        1
      </Button>
      <Button onClick={goToPreviousPage} isDisabled={isFirstPage}>
        Previous
      </Button>
      <Input type="number" defaultValue={currentPage} onKeyDown={handleInputKeyDown} />
      <Button onClick={goToLastPage} isDisabled={isLastPage}>
        Last ({pages})
      </Button>
      <Button onClick={goToNextPage} isDisabled={isLastPage}>
        Next
      </Button>
    </Flex>
  )
}

export default Pagination
