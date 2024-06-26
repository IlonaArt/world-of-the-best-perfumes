import { NextApiRequest, NextApiResponse } from 'next'
import users from './users.json'

const fs = require('fs')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userEmail, userProperties } = req.body

  const userIndex = users.findIndex(user => user.email === userEmail)
  const userData = users[userIndex]
  if (!userData) {
    return res.status(401).json({ error: 'sww' })
  }

  users[userIndex] = { ...userData, ...userProperties }
  fs.writeFileSync('src/pages/api/users.json', JSON.stringify(users, null, 2), 'utf-8')
  return res.status(200).json({ wishlists: userData.wishlists })
}
