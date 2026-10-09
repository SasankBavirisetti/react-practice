import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App component', () => {
  it('renders the React Practice heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /react practice/i,
      }),
    ).toBeInTheDocument()
  })
})
