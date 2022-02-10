import { useCallback, useEffect, useMemo, useState } from 'react'

import * as S from './styles'

import { ContentByUploadStateType, UploadStateType } from './types'
import imageUtils from '../../utils/ImageUtils'
import AvatarUploadWaitingState from '../AvatarUploadWaitingState'
import AvatarUploadCroppingState from '../AvatarUploadCroppingState'
import AvatarUploadFailedState from '../AvatarUploadFailedState'
import AvatarUploadSavedState from '../AvatarUploadSavedState'

const CROP_SIZE = 113

const initialState: {
  state: UploadStateType
  file?: File
  zoom: number
} = {
  state: 'WAITING',
  file: undefined,
  zoom: 150
}

interface Props {
  onSaveAvatar: (base64Data: string) => void
}

const AvatarUpload = ({ onSaveAvatar }: Props) => {
  const [currentState, setCurrentState] = useState<UploadStateType>(
    initialState.state
  )
  const [file, setFile] = useState<File>()
  const [zoom, setZoom] = useState(initialState.zoom)

  useEffect(() => {
    if (currentState === 'FAILED') {
      setFile(initialState.file)
      setZoom(initialState.zoom)
    }
  }, [currentState])

  const restart = useCallback(() => {
    setFile(initialState.file)
    setZoom(initialState.zoom)
    setCurrentState('WAITING')
  }, [])

  const waitingComponent = useMemo(
    () => (
      <AvatarUploadWaitingState
        onSelectValidFile={(file) => {
          setZoom(initialState.zoom)
          setFile(file)
          setCurrentState('CROPPING')
        }}
        onSelectInvalidFile={() => setCurrentState('FAILED')}
      />
    ),
    []
  )

  const croppingComponent = useMemo(
    () => (
      <AvatarUploadCroppingState
        file={file}
        zoom={zoom}
        setZoom={setZoom}
        onRestart={restart}
        onSaveCrop={() => {
          if (file) {
            imageUtils
              .cropRoundImage(file, CROP_SIZE, zoom / 100)
              .then((base64Data) => {
                onSaveAvatar(base64Data)
                setCurrentState('SAVED')
              })
              .catch(() => {
                setCurrentState('FAILED')
              })
          } else {
            setCurrentState('FAILED')
          }
        }}
      />
    ),
    [file, zoom, restart, onSaveAvatar]
  )

  const savedAndWaitingComponent = useMemo(
    () => (
      <AvatarUploadSavedState
        file={file}
        zoom={zoom}
        onSelectValidFile={(file) => {
          setZoom(initialState.zoom)
          setFile(file)
          setCurrentState('CROPPING')
        }}
        onSelectInvalidFile={() => setCurrentState('FAILED')}
      />
    ),
    [file, zoom]
  )

  const failedComponent = useMemo(
    () => <AvatarUploadFailedState onRestart={restart} />,
    [restart]
  )

  const contentByState = useMemo(
    () =>
      ({
        WAITING: waitingComponent,
        CROPPING: croppingComponent,
        SAVED: savedAndWaitingComponent,
        FAILED: failedComponent
      } as ContentByUploadStateType),
    [
      waitingComponent,
      croppingComponent,
      savedAndWaitingComponent,
      failedComponent
    ]
  )

  const currentContent = useMemo(
    () => contentByState[currentState],
    [contentByState, currentState]
  )

  return <S.Container currentState={currentState}>{currentContent}</S.Container>
}

export default AvatarUpload
