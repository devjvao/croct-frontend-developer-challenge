import { useMemo, useState } from 'react'

import * as S from './styles'

import { ContentByUploadStateType, uploadState, UploadStateType } from './types'

const AvatarUpload = () => {
  const [currentState, setCurrentState] = useState<UploadStateType>(
    uploadState.WAITING as UploadStateType
  )

  console.log(currentState, setCurrentState)

  const contentByState = useMemo(
    () =>
      ({
        WAITING: (
          <div>
            <span>
              <em className="icon icon-image" />
              Organization Logo
            </span>
            <span>Drop the image here or click to browse</span>
          </div>
        ),
        CROPPING: (
          <div>
            <div />
            <div>
              <span>Crop</span>
              <div />
            </div>
            <button>Save</button>
          </div>
        ),
        SAVED_AND_WAITING: (
          <div>
            <div />
            <span>
              <em className="icon icon-image" />
              Organization Logo
            </span>
            <span>Drop the image here or click to browse</span>
          </div>
        ),
        FAILED: (
          <div>
            <div>
              <em className="icon icon-warning" />
            </div>
            <span>Sorry, the upload failed.</span>
            <span>Try again</span>
          </div>
        )
      } as ContentByUploadStateType),
    []
  )

  const currentContent = useMemo(
    () => contentByState[currentState],
    [contentByState, currentState]
  )

  return <S.Wrapper currentState={currentState}>{currentContent}</S.Wrapper>
}

export default AvatarUpload
