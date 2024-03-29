import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import searchIcon from '../../public/search.svg'
import { Box, Button, Input } from '@chakra-ui/react'

const SearchField = () => {
  const [showInput, setShowInput] = useState<boolean>(false)

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowInput(false)
    }
  }

  useEffect(() => {
    if (showInput === true) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [showInput])

  return (
    <Box height="24px">
      {showInput ? (
        <label>
          <Input name="search" type="search" onBlur={() => setShowInput(false)} />
        </label>
      ) : (
        <Button
          backgroundColor="transparent"
          height="24px"
          p={0}
          onClick={() => setShowInput(true)}
        >
          <Image priority src={searchIcon} alt="search icon" />
        </Button>
      )}
    </Box>
  )
}

export default SearchField
