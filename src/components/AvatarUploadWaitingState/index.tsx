import InputImageTitle from '../InputImageTitle'
import UploadArea from '../UploadArea'

interface Props {
  onSelectValidFile: (file: File) => void
  onSelectInvalidFile: () => void
}

const AvatarUploadWaitingState = ({
  onSelectValidFile,
  onSelectInvalidFile
}: Props) => (
  <UploadArea
    role="waiting-state"
    onSelectValidFile={onSelectValidFile}
    onSelectInvalidFile={onSelectInvalidFile}
  >
    <InputImageTitle />
  </UploadArea>
)

export default AvatarUploadWaitingState
