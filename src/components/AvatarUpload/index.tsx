import { useCallback, useMemo, useState } from 'react'

import * as S from './styles'

import { ContentByUploadStateType, UploadStateType } from './types'
import UploadArea from '../UploadArea'
import CircleShapedImage from '../CircleShapedImage'
import SliderInput from '../SliderInput'

const initialState: {
  state: UploadStateType
  file?: File
  zoom: number
} = {
  state: 'WAITING',
  file: undefined,
  zoom: 150
}

const AvatarUpload = () => {
  const [currentState, setCurrentState] = useState<UploadStateType>(
    initialState.state
  )
  const [file, setFile] = useState<File>()
  const [zoom, setZoom] = useState(initialState.zoom)

  const restart = useCallback(() => {
    setFile(initialState.file)
    setZoom(initialState.zoom)
    setCurrentState('WAITING')
  }, [])

  const contentByState = useMemo(
    () =>
      ({
        WAITING: (
          <UploadArea
            onSelectValidFile={(file) => {
              setZoom(initialState.zoom)
              setFile(file)
              setCurrentState('CROPPING')
            }}
            onSelectInvalidFile={() => setCurrentState('FAILED')}
          >
            <S.TitleWrapper>
              <S.Title>
                <em className="icon-image" />
                <span>Organization Logo</span>
              </S.Title>
              <S.Subtitle>Drop the image here or click to browse</S.Subtitle>
            </S.TitleWrapper>
          </UploadArea>
        ),
        CROPPING: (
          <S.WrapperWithImage>
            <em className="icon-close" onClick={restart} />
            <CircleShapedImage zoom={zoom / 100} image={file} />
            <S.CropSliderWrapper>
              <S.CropTitle>Crop</S.CropTitle>
              <SliderInput
                min={100}
                max={300}
                value={zoom}
                onChange={setZoom}
              />
              <S.SaveButton
                onClick={() => setCurrentState('SAVED_AND_WAITING')}
              >
                Save
              </S.SaveButton>
            </S.CropSliderWrapper>
          </S.WrapperWithImage>
        ),
        SAVED_AND_WAITING: (
          <UploadArea
            onSelectValidFile={(file) => {
              setZoom(initialState.zoom)
              setFile(file)
              setCurrentState('CROPPING')
            }}
            onSelectInvalidFile={() => setCurrentState('FAILED')}
          >
            <S.WrapperWithImage>
              <CircleShapedImage image={file} zoom={zoom / 100} />
              <S.TitleWrapper>
                <S.Title>
                  <em className="icon-image" />
                  <span>Organization Logo</span>
                </S.Title>
                <S.Subtitle>Drop the image here or click to browse</S.Subtitle>
              </S.TitleWrapper>
            </S.WrapperWithImage>
          </UploadArea>
        ),
        FAILED: (
          <S.WrapperWithImage>
            <em className="icon-close" onClick={restart} />
            <CircleShapedImage />
            <div>
              <S.FeedbackMessage>Sorry, the upload failed.</S.FeedbackMessage>
              <S.TextLink onClick={restart}>Try again</S.TextLink>
            </div>
          </S.WrapperWithImage>
        )
      } as ContentByUploadStateType),
    [file, zoom, restart]
  )

  const currentContent = useMemo(
    () => contentByState[currentState],
    [contentByState, currentState]
  )

  return <S.Container currentState={currentState}>{currentContent}</S.Container>
}

export default AvatarUpload
