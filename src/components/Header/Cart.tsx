import React from 'react'
import Image from 'next/image'
import cartIcon from '../../public/cart.svg'

const Cart = () => {
  return (
    <a href="#">
      <span>Cart</span>
      <Image priority src={cartIcon} alt="cart icon" />
    </a>
  )
}

export default Cart
