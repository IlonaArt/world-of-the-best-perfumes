import { SortType, isSortType } from '../../../interfaces'
import { defaultParams } from '../constants'
import { Params } from '../fetchAllPerfume'

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
  const sort = parseStringToSortType(urlParams.get('sort')) ?? defaultParams.sort
  const brand = urlParams.get('brand')
  const page =
    parseStringToNumber(urlParams.get('page'), [1, Infinity]) ?? defaultParams.page
  const pageLimit =
    parseStringToNumber(urlParams.get('pageLimit'), [1, Infinity]) ??
    defaultParams.pageLimit
  return {
    sort,
    filters: { brand },
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