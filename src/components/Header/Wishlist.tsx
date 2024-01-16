import React from 'react'
import Image from 'next/image'
import heartIcon from '../../public/heart.svg'

const Wishlist = () => {
  return (
    <a href="#">
      <span>Wishlist</span>
      <Image priority src={heartIcon} alt="wishlist icon" />
    </a>
  )
}

export default Wishlist
