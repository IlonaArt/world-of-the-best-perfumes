import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { useUnit } from 'effector-react'
import { $currentPage, $pages, changeUrlParamsEffect } from './model'
import PrevIcon from '../../public/prev-icon.svg'
import NextIcon from '../../public/next-icon.svg'
import { colors } from '../../theme/foundations/colors'

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
    <Flex gap={2} justifyContent={{ base: 'initial', md: 'center' }}>
      <Button width="38px" px={3} onClick={goToFirstPage} isDisabled={isFirstPage}>
        1
      </Button>
      <Button
        px={3}
        onClick={goToPreviousPage}
        isDisabled={isFirstPage}
        flexShrink="0"
        leftIcon={
          <PrevIcon width={14} iconColor={!isFirstPage ? 'black' : colors.disabled} />
        }
      >
        <Text display={{ base: 'none', md: 'block' }}>Prev</Text>
      </Button>
      <Button
        px={3}
        onClick={goToNextPage}
        isDisabled={isLastPage}
        flexShrink="0"
        rightIcon={<NextIcon width={14} color="black" />}
      >
        <Text display={{ base: 'none', md: 'block' }}>Next</Text>
      </Button>
      <Input
        width={{ base: '100%', lg: '82px' }}
        p={3}
        textAlign="center"
        type="number"
        borderColor={colors.black}
        defaultValue={currentPage}
        onKeyDown={handleInputKeyDown}
      />
      <Button
        ml={{ base: 'auto', lg: 'initial' }}
        px={3}
        flexShrink="0"
        onClick={goToLastPage}
        isDisabled={isLastPage}
      >
        Last ({pages})
      </Button>
    </Flex>
  )
}

export default Pagination
