import { NextApiRequest, NextApiResponse } from 'next'
import data from './dataFragrances.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { perfumes } = req.body

  const filteredData = data.filter(perfume => perfumes.includes(perfume.id))
  res.status(200).json(filteredData)
}
