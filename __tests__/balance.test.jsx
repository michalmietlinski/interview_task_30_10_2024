import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Balance from '../src/app/content/balance'
import { mockSum, mockTwoTransactions } from '../testUtils'

describe('Balance', () => {
  it('renders a Balance', () => {
    render(<Balance filteredList={mockTwoTransactions}/>)
    const heading = screen.getByText('Balance:')
    expect(heading).toBeInTheDocument()
  })
  
  it('renders a Balance value', () => {
    render(<Balance filteredList={mockTwoTransactions}/>)
    const element = screen.getByTestId('balance')
    expect(element).toBeInTheDocument()
	expect(element.textContent).toEqual(mockSum.toString())
  })
})
