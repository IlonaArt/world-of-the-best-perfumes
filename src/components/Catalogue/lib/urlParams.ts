import { SortType, isSortType } from '../../../interfaces'
import { defaultParams } from '../constants'
import { Params } from '../../../utils/fetchPerfume'

export const parseStringToSortType = (value: string | undefined): SortType => {
  if (!value || !isSortType(value)) return
  return value as SortType
}

export const parseStringToNumber = (
  value: string | undefined,
  range?: [number, number],
): number => {
  if (!value) return
  const valueAsNumber = Number(value)
  if (Number.isNaN(valueAsNumber)) return
  if (range && (valueAsNumber < range[0] || valueAsNumber > range[1])) return
  return valueAsNumber
}

export const parseUrlParams = (urlParams: URLSearchParams): Params => {
  const search = urlParams.get('search')
  const sort = parseStringToSortType(urlParams.get('sort')) ?? defaultParams.sort
  const brand = urlParams.get('brand')
  const minPrice = parseStringToNumber(urlParams.get('minPrice'), [0, Infinity])
  const maxPrice = parseStringToNumber(urlParams.get('maxPrice'), [0, Infinity])
  const volume = parseStringToNumber(urlParams.get('volume'), [0, Infinity])
  const minVolume = parseStringToNumber(urlParams.get('minVolume'), [0, Infinity])
  const maxVolume = parseStringToNumber(urlParams.get('maxVolume'), [0, Infinity])
  const page =
    parseStringToNumber(urlParams.get('page'), [1, Infinity]) ?? defaultParams.page
  const pageLimit =
    parseStringToNumber(urlParams.get('pageLimit'), [1, Infinity]) ??
    defaultParams.pageLimit
  return {
    sort,
    filters: { search, brand, minPrice, maxPrice, volume, minVolume, maxVolume },
    page,
    pageLimit,
  }
}

export const getDefaultUrlParams = (): Params => {
  if (typeof window === 'undefined') return defaultParams
  const urlParams = new URLSearchParams(window.location.search)
  return parseUrlParams(urlParams)
}

export const changeUrlParams = (params: Partial<Params>): Params => {
  if (typeof window === 'undefined') return
  const urlParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([key, value]) => {
        if (value === undefined) {
          urlParams.delete(key)
        } else {
          urlParams.set(key, value.toString())
        }
      })
    } else {
      urlParams.set(key, value.toString())
    }
  })
  if (!params.page) {
    urlParams.set('page', '1')
  }
  window.history.replaceState(null, '', `?${urlParams.toString()}`)
  return parseUrlParams(urlParams)
}

export const toUrlParams = (params: Partial<Params>) => {
  const urlParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([key, value]) => {
        if (value) {
          urlParams.set(key, value.toString())
        }
      })
    } else {
      urlParams.set(key, value.toString())
    }
  })
  return urlParams.toString()
}
