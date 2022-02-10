import { render, screen } from '@testing-library/react'

import AvatarUploadFailedState from '.'

describe('<AvatarUploadFailedState />', () => {
  it('should render the component with a warning icon', () => {
    const { container } = render(
      <AvatarUploadFailedState onRestart={jest.fn} />
    )

    expect(screen.getByRole('invalid-image')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
