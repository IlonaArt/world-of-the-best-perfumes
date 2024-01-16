import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import searchIcon from '../../public/search.svg'

const SearchField = () => {
  const [showInput, setShowInput] = useState<boolean>(false)
  
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowInput(false)
    }
  }

  useEffect(() => {
    if (showInput === true) {
      window.addEventListener("keydown", handleEscape)
    }
    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [showInput])

  return (
    <div>
      {showInput ? (
        <label>
          <input name="search" type="search" onBlur={() => console.log('slkjfhkjshfsjk')}/>
        </label>
      ) : (
        <button type="button" onClick={() => setShowInput(true)}>
          <Image priority src={searchIcon} alt="search icon" />
        </button>
      )}
    </div>
  )
}

export default SearchField
