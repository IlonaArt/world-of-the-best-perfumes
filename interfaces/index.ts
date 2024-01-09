export interface Perfume {
  title: string
  photo: string
  brand: string
  price: number
  discount: number
  description: string
}

export interface PerfumeList {
  [id: string]: Perfume
}
