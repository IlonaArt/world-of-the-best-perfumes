export interface Perfume {
  title: string
  photo: string
  brand: string
  price: Array<number>
  discount: Array<number>
  description: string
  volume: Array<number>
  type: string
  family: Array<string>
}

export interface PerfumeList {
  [id: string]: Perfume
}

export type Page = 'home' | 'catalogue'
