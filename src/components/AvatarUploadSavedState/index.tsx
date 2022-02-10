import * as S from './styles'
import CircleShapedImage from '../CircleShapedImage'
import UploadArea from '../UploadArea'
import AvatarUploadStateWithImage from '../AvatarUploadStateWithImage'

interface Props {
  file?: File
  zoom: number
  onSelectValidFile: (file: File) => void
  onSelectInvalidFile: () => void
}

const AvatarUploadSavedState = ({
  file,
  zoom,
  onSelectValidFile,
  onSelectInvalidFile
}: Props) => (
  <UploadArea
    role="saved-state"
    onSelectValidFile={onSelectValidFile}
    onSelectInvalidFile={onSelectInvalidFile}
  >
    <AvatarUploadStateWithImage>
      <CircleShapedImage renderKey="saved" image={file} scale={zoom / 100} />
      <S.InputImageTitleWithMargin />
    </AvatarUploadStateWithImage>
  </UploadArea>
)

export default AvatarUploadSavedState
