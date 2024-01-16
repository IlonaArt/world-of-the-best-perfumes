export interface Perfume {
  title: string
  photo: string
  brand: string
  price: number
  discount: number
  description: string
  amount: number
  type: number
  family: Array<string>
}

export interface PerfumeList {
  [id: string]: Perfume
}
