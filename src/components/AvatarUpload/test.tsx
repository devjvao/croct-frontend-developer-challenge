import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

import AvatarUpload from '.'
import testUtils from '../../utils/TestUtils'

describe('<AvatarUpload />', () => {
  it('should start avatar upload in the waiting state', () => {
    const { container } = render(<AvatarUpload onSaveAvatar={jest.fn} />)

    expect(screen.getByRole('waiting-state')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change to cropping state after a file is uploaded', async () => {
    const file = testUtils.generateEmptyFile('image/jpg')

    render(<AvatarUpload onSaveAvatar={jest.fn} />)

    const input = screen.getByRole('file-input') as HTMLInputElement

    act(() => {
      fireEvent.change(input, {
        target: { files: [file] }
      })
    })

    await waitFor(() =>
      expect(screen.getByRole('circle-image').style.backgroundImage).toMatch(
        /url\(data.+\)/g
      )
    )

    expect(screen.getByRole('cropping-state')).toBeInTheDocument()
  })

  it('should change to failed state when tryind to crop invalid image', async () => {
    const file = testUtils.generateEmptyFile('image/jpg')

    render(<AvatarUpload onSaveAvatar={jest.fn} />)

    const input = screen.getByRole('file-input') as HTMLInputElement

    act(() => {
      fireEvent.change(input, {
        target: { files: [file] }
      })
    })

    await waitFor(() =>
      expect(screen.getByRole('circle-image').style.backgroundImage).toMatch(
        /url\(data.+\)/g
      )
    )

    const button = screen.getByRole('save-button') as HTMLButtonElement

    act(() => {
      fireEvent.click(button)
    })

    await waitFor(() =>
      expect(screen.getByRole('failed-state')).toBeInTheDocument()
    )
  })

  it('should change to failed state after an invalid file is uploaded', async () => {
    const file = testUtils.generateEmptyFile('application/pdf')

    render(<AvatarUpload onSaveAvatar={jest.fn} />)

    const input = screen.getByRole('file-input') as HTMLInputElement

    act(() => {
      fireEvent.change(input, {
        target: { files: [file] }
      })
    })

    expect(screen.getByRole('failed-state')).toBeInTheDocument()
  })
})
