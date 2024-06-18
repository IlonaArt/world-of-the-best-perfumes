import { NextApiRequest, NextApiResponse } from 'next'
import data from './dataFragrances.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  const perfume = data.find(perfume => perfume.id === Number(id))
  res.status(200).json(perfume)
}
