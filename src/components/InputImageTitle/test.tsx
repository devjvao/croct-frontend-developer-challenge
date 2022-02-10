import { render, screen } from '@testing-library/react'

import InputImageTitle from '.'

describe('<InputImageTitle />', () => {
  it('should render the title', () => {
    const { container } = render(<InputImageTitle />)

    expect(screen.getByRole('title')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the subtitle', () => {
    render(<InputImageTitle />)
    const subtitle = screen.getByRole('subtitle')

    expect(subtitle).toBeInTheDocument()

    expect(subtitle).toMatchSnapshot()
  })
})
