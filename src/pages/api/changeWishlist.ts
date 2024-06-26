import { NextApiRequest, NextApiResponse } from 'next'
import users from './users.json'

const fs = require('fs')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userEmail, wishlistName } = req.body

  const userIndex = users.findIndex(user => user.email === userEmail)
  const userData = users[userIndex]
  if (!userData) {
    return res.status(401).json({ error: 'sww' })
  }

  const { wishlists } = userData
  const wishlistIndex = wishlists.findIndex(wishlist => wishlist.name === wishlistName)
  const wishlist = wishlists[wishlistIndex]
  if (!wishlist) {
    return res.status(401).json({ error: 'sww' })
  }

  const currentWishlistIndex = wishlists.findIndex(
    wishlist => wishlist.isSelected === true,
  )

  if (currentWishlistIndex > -1) {
    userData.wishlists[currentWishlistIndex].isSelected = false
  }

  userData.wishlists[wishlistIndex].isSelected = !wishlist.isSelected

  users[userIndex] = userData

  fs.writeFileSync('src/pages/api/users.json', JSON.stringify(users, null, 2), 'utf-8')
  return res.status(200).json({ wishlists: userData.wishlists })
}
