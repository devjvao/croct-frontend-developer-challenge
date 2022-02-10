import { act, render } from '@testing-library/react'

import AvatarUploadSavedState from '.'
import testUtils from '../../utils/TestUtils'

describe('<AvatarUploadSavedState />', () => {
  it('should render the component', () => {
    const file = testUtils.generateLightImage()

    const { container, rerender } = render(
      <AvatarUploadSavedState
        zoom={150}
        onSelectValidFile={jest.fn}
        onSelectInvalidFile={jest.fn}
      />
    )

    act(() => {
      rerender(
        <AvatarUploadSavedState
          file={file}
          zoom={150}
          onSelectValidFile={jest.fn}
          onSelectInvalidFile={jest.fn}
        />
      )
    })

    expect(container).toMatchSnapshot()
  })
})
