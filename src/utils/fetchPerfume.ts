import { Perfume, SortType } from '../interfaces'
import { fetchData } from './fetchData'
import { ResponseWithPagination } from './types'
import { toUrlParams } from '../components/Catalogue/lib/urlParams'

export interface Params {
  sort: SortType
  filters?: {
    search?: string
    brand?: string
    minPrice?: number
    maxPrice?: number
    volume?: number
    minVolume?: number
    maxVolume?: number
  }
  page: number
  pageLimit: number
}

export const fetchPerfume = (params: Partial<Params>) =>
  fetchData<ResponseWithPagination<Perfume[]>>(
    `/api/getPerfumeData?sort=${toUrlParams(params)}`,
  )
