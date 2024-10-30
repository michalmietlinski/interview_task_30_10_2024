import '@testing-library/jest-dom'
import { render, screen, fireEvent, keyboard } from '@testing-library/react'
import Filter from '../src/app/content/filter'

describe('Filter', () => {
  it('renders a Filter', () => {
    render(<Filter initialValue={''} setNewValue={()=>{}} csValue={false} setCSValue={()=>{}}/>)
    const label = screen.getByText('Beneficiary')
    expect(label).toBeInTheDocument()
	const casediv = screen.getByText('Case sensitive?')
    expect(casediv).toBeInTheDocument()
	const input = screen.getByTestId('testinput')
    expect(input).toBeInTheDocument()
	const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('calls function on input change', async () => {
	const setNewValue = jest.fn()
	const setCSValue = jest.fn()
    render(<Filter initialValue={''} setNewValue={setNewValue} csValue={false} setCSValue={setCSValue}/>)
	const input = screen.getByTestId('testinput')
	fireEvent.change(input, {target: {value: 'a'}})
    expect(setNewValue).toHaveBeenCalledTimes(1)
  })

  it('calls function on checkbox change', async () => {
	const setNewValue = jest.fn()
	const setCSValue = jest.fn()
    render(<Filter initialValue={''} setNewValue={setNewValue} csValue={false} setCSValue={setCSValue}/>)
	const checkbox = screen.getByTestId('checkbox')
	fireEvent.click(checkbox)
    expect(setCSValue).toHaveBeenCalledTimes(1)
  })
})
