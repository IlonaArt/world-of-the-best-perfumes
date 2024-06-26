import { NextApiRequest, NextApiResponse } from 'next'
import users from './users.json'

const fs = require('fs')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userEmail, productId } = req.body

  const userIndex = users.findIndex(user => user.email === userEmail)
  const userData = users[userIndex]
  if (!userData) {
    return res.status(401).json({ error: 'sww' })
  }

  const { wishlists } = userData
  const wishlistIndex = wishlists.findIndex(wishlist => wishlist.isSelected === true)
  const wishlist = wishlists[wishlistIndex] ?? {
    name: 'Default',
    isSelected: true,
    perfumes: [productId],
  }

  const isPerfumeInWishlist = wishlist.perfumes.some(perfume => perfume === productId)
  if (isPerfumeInWishlist) {
    wishlist.perfumes = wishlist.perfumes.filter(perfume => perfume !== productId)
  } else {
    wishlist.perfumes.push(productId)
  }

  userData.wishlists[wishlistIndex > -1 ? wishlistIndex : 0] = wishlist
  users[userIndex] = userData
  fs.writeFileSync('src/pages/api/users.json', JSON.stringify(users, null, 2), 'utf-8')
  return res.status(200).json({ wishlists: userData.wishlists })
}
