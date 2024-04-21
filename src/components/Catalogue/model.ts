import {
  createEffect,
  StoreWritable,
  createStore,
  sample,
  createEvent,
  attach,
} from 'effector'
import { createGate } from 'effector-react'
import { Perfume, SortType } from '../../interfaces'
import { fetchAllPerfume } from './fetchAllPerfume'

export const PerfumeGate = createGate()

export const dataSorted = createEvent<SortType>()

export const fetchDataSideEffect = createEffect(fetchAllPerfume)
const sort = createEffect(
  ({ data, sortType }: { data: Perfume[]; sortType: SortType }) => {
    const newSortedData = [...data].sort((perfume1, perfume2) => {
      const brand1 = perfume1.brand.toUpperCase()
      const brand2 = perfume2.brand.toUpperCase()
      const finalPrice1 =
        perfume1.discount.length > 0 ? perfume1.discount[0] : perfume1.price[0]
      const finalPrice2 =
        perfume2.discount.length > 0 ? perfume2.discount[0] : perfume2.price[0]

      if (sortType.includes('brand')) {
        return brand1 < brand2 ? -1 : 1
      } else if (sortType.includes('price')) {
        return finalPrice1 - finalPrice2
      }
      return 0
    })

    if (sortType.includes('desc')) {
      newSortedData.reverse()
    }

    return newSortedData
  },
)

export const $data: StoreWritable<Perfume[]> = createStore(null)
export const $sortedData: StoreWritable<Perfume[]> = createStore(null)
export const $error = createStore(null)
const sortDataEffect = attach({
  source: $data,
  effect: sort,
  mapParams: (sortType: SortType, data) => ({ data, sortType }),
})

$data.on(fetchDataSideEffect.doneData, (_, data) => data)
$error.on(fetchDataSideEffect.failData, (_, error) => error.message)

sample({
  clock: PerfumeGate.open,
  target: fetchDataSideEffect,
})

sample({
  clock: $data,
  fn: (): SortType => 'brand-asc',
  target: dataSorted,
})

sample({
  clock: dataSorted,
  target: sortDataEffect,
})

sample({
  clock: sortDataEffect.doneData,
  target: $sortedData,
})
