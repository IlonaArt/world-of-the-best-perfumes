import { NextApiRequest, NextApiResponse } from 'next'
import users from './users.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  const userData = users.find(user => user.email === email)
  if (!userData) {
    return res.status(401).json({ error: 'incorrectData' })
  }

  if (userData.password !== password) {
    return res.status(401).json({ error: 'incorrectData' })
  }

  res
    .status(200)
    .json({ name: userData.name, email: userData.email, wishlists: userData.wishlists })
}
