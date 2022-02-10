import { act, fireEvent, render, screen } from '@testing-library/react'

import UploadArea from '.'
import testUtils from '../../utils/TestUtils'

describe('<UploadArea />', () => {
  it('should render the component', () => {
    const { container } = render(
      <UploadArea onSelectValidFile={jest.fn} onSelectInvalidFile={jest.fn}>
        Children
      </UploadArea>
    )

    expect(container).toMatchSnapshot()
  })

  it('should call onSelectValidFile when uploading a valid image', async () => {
    const file = testUtils.generateEmptyFile('image/jpg')

    const onSelectValidFile = jest.fn(() => {
      jest.fn()
    })

    render(
      <UploadArea
        onSelectValidFile={onSelectValidFile}
        onSelectInvalidFile={jest.fn}
      >
        Children
      </UploadArea>
    )

    const input = screen.getByRole('file-input') as HTMLInputElement

    act(() => {
      fireEvent.change(input, {
        target: { files: [file] }
      })
    })

    expect(onSelectValidFile).toHaveBeenCalledTimes(1)
  })

  it('should call onSelectInvalidFile when uploading an invalid image', async () => {
    const file = testUtils.generateEmptyFile('application/pdf')

    const onSelectInvalidFile = jest.fn(() => {
      jest.fn()
    })

    render(
      <UploadArea
        onSelectValidFile={jest.fn}
        onSelectInvalidFile={onSelectInvalidFile}
      >
        Children
      </UploadArea>
    )

    const input = screen.getByRole('file-input') as HTMLInputElement

    act(() => {
      fireEvent.change(input, {
        target: { files: [file] }
      })
    })

    expect(onSelectInvalidFile).toHaveBeenCalledTimes(1)
  })
})
