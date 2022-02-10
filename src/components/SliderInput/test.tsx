import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import SliderInput from '.'

describe('<SliderInput />', () => {
  it('should render the slider', () => {
    const { container } = render(
      <SliderInput min={100} max={300} value={200} onChange={jest.fn} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change slider value', () => {
    let value = 150

    const onChange = jest.fn((newValue: number) => {
      value = newValue
    })

    const { rerender } = render(
      <SliderInput min={100} max={300} value={value} onChange={onChange} />
    )
    const input = screen.getByRole('slider') as HTMLInputElement

    waitFor(() => {
      fireEvent.change(input, { target: { value: '151' } })
      fireEvent.change(input, { target: { value: '152' } })
      fireEvent.change(input, { target: { value: '153' } })
    })

    rerender(
      <SliderInput min={100} max={300} value={value} onChange={onChange} />
    )

    expect(onChange).toHaveBeenCalledTimes(3)
    expect(input.value).toBe('153')
  })
})
