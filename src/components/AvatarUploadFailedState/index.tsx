import * as S from './styles'
import AvatarUploadStateWithImage from '../AvatarUploadStateWithImage'
import CircleShapedImage from '../CircleShapedImage'

interface Props {
  onRestart: () => void
}

const AvatarUploadFailedState = ({ onRestart }: Props) => (
  <AvatarUploadStateWithImage role="failed-state" onClose={onRestart}>
    <CircleShapedImage renderKey="failed" />
    <div>
      <S.FeedbackMessage>Sorry, the upload failed.</S.FeedbackMessage>
      <S.TextLink onClick={onRestart}>Try again</S.TextLink>
    </div>
  </AvatarUploadStateWithImage>
)

export default AvatarUploadFailedState
