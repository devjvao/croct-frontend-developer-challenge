import * as S from './styles'
import CircleShapedImage from '../CircleShapedImage'
import SliderInput from '../SliderInput'
import AvatarUploadStateWithImage from '../AvatarUploadStateWithImage'

interface Props {
  file?: File
  zoom: number
  setZoom: (value: number) => void
  onRestart: () => void
  onSaveCrop: () => void
}

const AvatarUploadCroppingState = ({
  file,
  zoom,
  setZoom,
  onRestart,
  onSaveCrop
}: Props) => (
  <AvatarUploadStateWithImage role="cropping-state" onClose={onRestart}>
    <CircleShapedImage renderKey="cropping" image={file} scale={zoom / 100} />
    <S.CropSliderWrapper>
      <S.CropTitle>Crop</S.CropTitle>
      <SliderInput min={100} max={300} value={zoom} onChange={setZoom} />
      <S.SaveButton role="save-button" onClick={onSaveCrop}>
        Save
      </S.SaveButton>
    </S.CropSliderWrapper>
  </AvatarUploadStateWithImage>
)

export default AvatarUploadCroppingState
