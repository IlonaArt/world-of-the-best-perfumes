import { Perfume, SortType } from '../../interfaces'
import { fetchData } from '../../utils/fetchData'

interface Params {
  sort: SortType
}

export const fetchAllPerfume = (params: Params) =>
  fetchData<Perfume[]>(`/api/getAllPerfumeData?sort=${params.sort}`)
