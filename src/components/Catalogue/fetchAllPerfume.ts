import { Perfume, SortType } from '../../interfaces'
import { fetchData } from '../../utils/fetchData'
import { ResponseWithPagination } from '../../utils/types'
import { toUrlParams } from './lib/urlParams'

export interface Params extends Record<string, string | number> {
  sort: SortType
  page: number
  pageLimit: number
}

export const fetchAllPerfume = (params: Partial<Params>) =>
  fetchData<ResponseWithPagination<Perfume[]>>(
    `/api/getAllPerfumeData?sort=${toUrlParams(params)}`,
  )
