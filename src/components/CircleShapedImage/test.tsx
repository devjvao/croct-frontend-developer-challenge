import { act, render, screen, waitFor } from '@testing-library/react'

import CircleShapedImage from '.'
import testUtils from '../../utils/TestUtils'

describe('<CircleShapedImage />', () => {
  it('should render the circle shaped image', async () => {
    const { container } = render(<CircleShapedImage />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should load and show the image', async () => {
    const file = testUtils.generateLightImage()

    const { container, rerender } = render(<CircleShapedImage />)

    act(() => {
      rerender(<CircleShapedImage image={file} />)
    })

    await waitFor(() =>
      expect(screen.getByRole('circle-image').style.backgroundImage).toMatch(
        /url\(data.+\)/g
      )
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should fail to load the image and show the warning icon', async () => {
    const file = testUtils.generateEmptyFile('image/jpg')

    const { rerender } = render(<CircleShapedImage />)

    act(() => {
      rerender(<CircleShapedImage image={file} />)
    })

    expect(screen.getByRole('invalid-image')).toMatchSnapshot()
  })
})
