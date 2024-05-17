import { Button, Flex, Input, Text } from '@chakra-ui/react'
import PrevIcon from '../public/prev-icon.svg'
import NextIcon from '../public/next-icon.svg'
import { colors } from '../theme/foundations/colors'

interface PaginationProps {
  pages: number
  currentPage: number
  onChange: (page: number) => void
}

const Pagination = ({ pages, currentPage, onChange }: PaginationProps) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === pages

  const goToFirstPage = () => {
    if (isFirstPage) return
    onChange(1)
  }

  const goToLastPage = () => {
    if (isLastPage) return
    onChange(pages)
  }

  const goToPreviousPage = () => {
    if (isFirstPage) return
    onChange(currentPage - 1)
  }

  const goToNextPage = () => {
    if (isLastPage) return
    onChange(currentPage + 1)
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    let inputValue = Number(event.currentTarget.value)
    if (Number.isNaN(inputValue) || event.code !== 'Enter') return
    inputValue = Math.max(Math.min(inputValue, pages), 1)
    onChange(inputValue)
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
        leftIcon={<PrevIcon width={14} />}
      >
        <Text display={{ base: 'none', md: 'block' }}>Prev</Text>
      </Button>
      <Button
        px={3}
        onClick={goToNextPage}
        isDisabled={isLastPage}
        flexShrink="0"
        rightIcon={<NextIcon width={14} />}
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
