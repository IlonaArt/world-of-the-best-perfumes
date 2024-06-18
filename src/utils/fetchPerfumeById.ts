import type { Perfume } from '../interfaces'
import { fetchData } from './fetchData'

export const fetchPerfumeById = (id: number) => {
  return fetchData<Perfume>(`/api/getPerfumeById?id=${id}`)
}
