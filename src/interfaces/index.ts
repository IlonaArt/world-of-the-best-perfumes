export interface Perfume {
  id: number
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

export type Page = 'about' | 'catalogue' | 'wishlist' | 'perfume'

export const SortTypes = ['brand-asc', 'brand-desc', 'price-asc', 'price-desc'] as const

export type SortType = (typeof SortTypes)[number]

export const isSortType = (value: unknown): value is SortType => {
  return SortTypes.includes(value as SortType)
}

export interface Wishlist {
  isSelected: boolean
  name: string
  perfumes: Partial<Perfume>[]
}

export interface User {
  name: string
  email: string
  wishlists: Wishlist[]
}
