import { Button, Text, useBreakpoint } from '@chakra-ui/react'
import SortingIcon from '../../../public/sorting.svg'

const SortingButton = () => {
  const breakpoint = useBreakpoint()

  return (
    <Button
      display="flex"
      fontWeight="normal"
      gap={1}
      padding={0}
      border={0}
      backgroundColor="transparent"
      _hover={{ backgroundColor: 'transparent', color: 'black' }}
    >
      {['sm', 'md', 'lg'].includes(breakpoint) && <SortingIcon aria-hidden />}
      <Text
        fontSize={{ base: 'sm', xl: 'lg' }}
        lineHeight={{ base: 'lg', xl: 'sm' }}
        mb={{ base: 0, xl: '14px' }}
      >
        Sorting
      </Text>
    </Button>
  )
}

export default SortingButton
