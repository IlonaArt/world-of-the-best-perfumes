import { Perfume, SortType } from '../../interfaces'
import { fetchData } from '../../utils/fetchData'
import { ResponseWithPagination } from '../../utils/types'
import { toUrlParams } from './lib/urlParams'

export interface Params {
  sort: SortType
  filters?: {
    brand?: string
    minPrice?: number
    maxPrice?: number
  }
  page: number
  pageLimit: number
}

export const fetchPerfume = (params: Partial<Params>) =>
  fetchData<ResponseWithPagination<Perfume[]>>(
    `/api/getPerfumeData?sort=${toUrlParams(params)}`,
  )