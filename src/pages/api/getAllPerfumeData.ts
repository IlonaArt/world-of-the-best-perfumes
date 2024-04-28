import { Perfume, SortType } from '../../interfaces'
import data from './dataFragrances.json'
import { NextApiRequest, NextApiResponse } from 'next'

const sort = (data: Perfume[], sortType: SortType) => {
  const newSortedData = [...data].sort((perfume1, perfume2) => {
    const brand1 = perfume1.brand.toUpperCase()
    const brand2 = perfume2.brand.toUpperCase()
    const finalPrice1 =
      perfume1.discount.length > 0 ? perfume1.discount[0] : perfume1.price[0]
    const finalPrice2 =
      perfume2.discount.length > 0 ? perfume2.discount[0] : perfume2.price[0]

    if (sortType.includes('brand')) {
      return brand1 < brand2 ? -1 : 1
    } else if (sortType.includes('price')) {
      return finalPrice1 - finalPrice2
    }
    return 0
  })

  if (sortType.includes('desc')) {
    newSortedData.reverse()
  }

  return newSortedData
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const brand = req.query.brand
  const sortType = req.query.sort as SortType
  const page = Number(req.query.page)
  const pageLimit = Number(req.query.pageLimit)

  let filteredData = data
  if (brand) {
    filteredData = filteredData.filter(perfume => perfume.brand === brand)
  }
  const sortedData = sort(filteredData, sortType)

  const resultData = sortedData.slice((page - 1) * pageLimit, page * pageLimit)
  const pages = Math.ceil(filteredData.length / pageLimit)

  res.status(200).json({ data: resultData, pages })
}
