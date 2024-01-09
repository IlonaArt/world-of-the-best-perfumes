import { render, screen } from '@testing-library/react'
import Home from './pages'

test('renders homepage', () => {
  render(<Home />)
  const linkElement = screen.getByText(/Welcome to your world of the best perfumes/i)
  expect(linkElement).toBeInTheDocument()
})
