import SearchField from './SearchField'
import React from 'react'
import Image from 'next/image'
import logoIcon from '../../public/logo.svg'
import Account from './Account'
import Cart from './Cart'
import Wishlist from './Wishlist'

const Header = () => {
  return (
    <header>
      <Image priority src={logoIcon} alt="Website logo" />
      <div>
        <SearchField />
        <Account />
        <Cart />
        <Wishlist />
      </div>
    </header>
  )
}

export default Header
