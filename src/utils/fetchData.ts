import { Perfume } from '../interfaces'

export const fetchData = async (): Promise<Perfume[]> => {
  const response = await fetch('/api/getAllPerfumeData')
  const jsonData = await response.json()
  return jsonData
}
