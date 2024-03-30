import { createEffect, StoreWritable, createStore, sample } from 'effector'
import { createGate } from 'effector-react'
import { Perfume } from '../interfaces'
import { fetchAllPerfume } from './api/fetchAllPerfume'

export const PerfumeGate = createGate()

export const fetchDataSideEffect = createEffect(fetchAllPerfume)

export const $data: StoreWritable<Perfume[]> = createStore(null)
export const $error = createStore(null)

$data.on(fetchDataSideEffect.doneData, (_, data) => data)
$error.on(fetchDataSideEffect.failData, (_, error) => error.message)

sample({
  clock: PerfumeGate.open,
  target: fetchDataSideEffect,
})
