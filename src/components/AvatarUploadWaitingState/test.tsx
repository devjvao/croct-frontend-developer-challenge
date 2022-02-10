import { render } from '@testing-library/react'

import AvatarUploadWaitingState from '.'

describe('<AvatarUploadWaitingState />', () => {
  it('should render the component', () => {
    const { container } = render(
      <AvatarUploadWaitingState
        onSelectValidFile={jest.fn}
        onSelectInvalidFile={jest.fn}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
