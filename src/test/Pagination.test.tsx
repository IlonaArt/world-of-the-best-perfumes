import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'
import Pagination from '../components/Pagination'

const onChangeMock = jest.fn()

describe('Pagination Component', () => {
  beforeEach(() => {
    onChangeMock.mockClear()
  })

  test('renders correctly when on the first page', () => {
    render(<Pagination pages={10} currentPage={1} onChange={onChangeMock} />)

    expect(screen.getByTestId('first-page-button')).toBeDisabled()
    expect(screen.getByTestId('prev-page-button')).toBeDisabled()
    expect(screen.getByTestId('next-page-button')).toBeEnabled()
    expect(screen.getByTestId('last-page-button')).toBeEnabled()
  })

  test('renders correctly when on the last page', () => {
    render(<Pagination pages={10} currentPage={10} onChange={onChangeMock} />)

    expect(screen.getByTestId('first-page-button')).toBeEnabled()
    expect(screen.getByTestId('prev-page-button')).toBeEnabled()
    expect(screen.getByTestId('next-page-button')).toBeDisabled()
    expect(screen.getByTestId('last-page-button')).toBeDisabled()
  })

  test('renders correctly when on a middle page', () => {
    render(<Pagination pages={10} currentPage={5} onChange={onChangeMock} />)

    expect(screen.getByTestId('first-page-button')).toBeEnabled()
    expect(screen.getByTestId('prev-page-button')).toBeEnabled()
    expect(screen.getByTestId('next-page-button')).toBeEnabled()
    expect(screen.getByTestId('last-page-button')).toBeEnabled()
  })

  test('navigates to the first page when "1" button is clicked', () => {
    render(<Pagination pages={10} currentPage={5} onChange={onChangeMock} />)

    fireEvent.click(screen.getByTestId('first-page-button'))
    expect(onChangeMock).toHaveBeenCalledWith(1)
  })

  test('navigates to the previous page when "Prev" button is clicked', () => {
    render(<Pagination pages={10} currentPage={5} onChange={onChangeMock} />)

    fireEvent.click(screen.getByTestId('prev-page-button'))
    expect(onChangeMock).toHaveBeenCalledWith(4)
  })

  test('navigates to the next page when "Next" button is clicked', () => {
    render(<Pagination pages={10} currentPage={5} onChange={onChangeMock} />)

    fireEvent.click(screen.getByTestId('next-page-button'))
    expect(onChangeMock).toHaveBeenCalledWith(6)
  })

  test('navigates to the last page when "Last" button is clicked', () => {
    render(<Pagination pages={10} currentPage={5} onChange={onChangeMock} />)

    fireEvent.click(screen.getByTestId('last-page-button'))
    expect(onChangeMock).toHaveBeenCalledWith(10)
  })

  test('navigates to the specified page when Enter key is pressed in input', () => {
    render(<Pagination pages={10} currentPage={5} onChange={onChangeMock} />)

    const input = screen.getByTestId('page-input')
    fireEvent.change(input, { target: { value: '3' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    expect(onChangeMock).toHaveBeenCalledWith(3)
    expect(input).toHaveValue('3')
  })

  test.skip('does not navigate when input value is invalid', () => {
    render(<Pagination pages={10} currentPage={5} onChange={onChangeMock} />)

    const input = screen.getByTestId('page-input')
    fireEvent.change(input, { target: { value: '1.' } })
    expect(input).toHaveValue('1')
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    expect(onChangeMock).toHaveBeenCalledWith(1)
    expect(input).toHaveValue('1')
  })
})
