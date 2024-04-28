import { createEffect, StoreWritable, createStore, sample, combine } from 'effector'
import { createGate } from 'effector-react'
import { type Perfume } from '../../interfaces'
import { fetchAllPerfume } from './fetchAllPerfume'
import { changeUrlParams, getDefaultUrlParams } from './lib/urlParams'

export const PerfumeGate = createGate()

export const fetchDataSideEffect = createEffect(fetchAllPerfume)
export const changeUrlParamsEffect = createEffect(changeUrlParams)

export const $data: StoreWritable<Perfume[]> = createStore(null)
export const $error = createStore(null)
export const $urlParams = createStore(getDefaultUrlParams())
export const $sortType = combine($urlParams, urlParams => urlParams.sort)
export const $filters = combine($urlParams, urlParams => urlParams.filters)
export const $currentPage = combine($urlParams, urlParams => urlParams.page)
export const $pages = createStore(1)

$data.on(fetchDataSideEffect.doneData, (_, data) => data.data)
$pages.on(fetchDataSideEffect.doneData, (_, data) => data.pages)
$error.on(fetchDataSideEffect.failData, (_, error) => error.message)

sample({
  clock: [PerfumeGate.open, $urlParams],
  source: $urlParams,
  target: fetchDataSideEffect,
})

sample({
  clock: changeUrlParamsEffect.doneData,
  target: $urlParams,
})
