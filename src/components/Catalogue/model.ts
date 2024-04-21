import {
  createEffect,
  StoreWritable,
  createStore,
  sample,
  createEvent,
  restore,
} from 'effector'
import { createGate } from 'effector-react'
import { Perfume, SortType } from '../../interfaces'
import { fetchAllPerfume } from './fetchAllPerfume'

const getDefaultSortType = (): SortType => {
  const defaultSortType = 'brand-asc'
  if (typeof window === 'undefined') return defaultSortType
  const urlParams = new URLSearchParams(window.location.search)
  return (urlParams.get('sort') as SortType) ?? defaultSortType
}

const changeUrlParams = (params: { sort: SortType }) => {
  if (typeof window === 'undefined') return
  const urlParams = new URLSearchParams(window.location.search)
  urlParams.set('sort', params.sort)
  window.history.replaceState(null, '', `?${urlParams.toString()}`)
}

export const PerfumeGate = createGate()

export const sortTypeChanged = createEvent<SortType>()

export const fetchDataSideEffect = createEffect(fetchAllPerfume)
const changeUrlParamsEffect = createEffect(changeUrlParams)

export const $data: StoreWritable<Perfume[]> = createStore(null)
export const $sortType: StoreWritable<SortType> = restore(
  sortTypeChanged,
  getDefaultSortType(),
)
export const $error = createStore(null)

$data.on(fetchDataSideEffect.doneData, (_, data) => data)
$error.on(fetchDataSideEffect.failData, (_, error) => error.message)

sample({
  clock: [PerfumeGate.open, $sortType],
  source: $sortType,
  fn: sortType => ({ sort: sortType }),
  target: fetchDataSideEffect,
})

sample({
  clock: sortTypeChanged,
  fn: sortType => ({ sort: sortType }),
  target: changeUrlParamsEffect,
})
