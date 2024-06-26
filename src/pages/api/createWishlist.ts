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
  const currentWishlistIndex = wishlists.findIndex(
    wishlist => wishlist.isSelected === true,
  )
  if (currentWishlistIndex === -1) {
    return res.status(401).json({ error: 'sww' })
  }

  userData.wishlists[currentWishlistIndex].isSelected = false

  const newWishlist = {
    name: wishlistName,
    isSelected: true,
    perfumes: [],
  }

  userData.wishlists.push(newWishlist)

  users[userIndex] = userData

  fs.writeFileSync('src/pages/api/users.json', JSON.stringify(users, null, 2), 'utf-8')
  return res.status(200).json({ wishlists: userData.wishlists })
}
