import { Perfume } from '../../interfaces'
import { fetchData } from '../../utils/fetchData'

export const fetchAllPerfume = () => fetchData<Perfume[]>('/api/getAllPerfumeData')
