import { render, screen } from '@testing-library/react'

import AvatarUpload from '.'

describe('<AvatarUpload />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<AvatarUpload />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<AvatarUpload />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
