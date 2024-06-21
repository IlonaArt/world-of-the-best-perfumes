import { NextApiRequest, NextApiResponse } from 'next'
import users from './users.json'

const fs = require('fs')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(422).json({ error: 'incorrectData' })
  }

  if (users.find(user => user.email === email)) {
    return res.status(422).json({ error: 'userExists' })
  }

  const userData = {
    name,
    email,
    password,
    wishlists: [],
  }

  try {
    users.push(userData)
    fs.writeFileSync('src/pages/api/users.json', JSON.stringify(users, null, 2), 'utf-8')
    return res.status(200).json({
      user: {
        name: userData.name,
        email: userData.email,
        wishlists: userData.wishlists,
      },
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'sww' })
  }
}
