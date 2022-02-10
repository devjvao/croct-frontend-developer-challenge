import { render, screen } from '@testing-library/react'

import AvatarUploadStateWithImage from '.'

describe('<AvatarUploadStateWithImage />', () => {
  it('should render the component with the close icon', () => {
    const { container } = render(
      <AvatarUploadStateWithImage onClose={jest.fn}>
        Children
      </AvatarUploadStateWithImage>
    )

    expect(screen.getByRole('close-icon')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render the component without the close icon', () => {
    const { container } = render(
      <AvatarUploadStateWithImage>Children</AvatarUploadStateWithImage>
    )

    expect(screen.queryByRole('close-icon')).toBeNull()

    expect(container).toMatchSnapshot()
  })
})
