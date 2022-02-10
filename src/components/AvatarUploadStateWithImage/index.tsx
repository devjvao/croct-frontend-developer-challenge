import { ReactNode } from 'react'

import * as S from './styles'

interface Props {
  children: ReactNode
  role?: string
  onClose?: () => void
}

const AvatarUploadStateWithImage = ({ role, children, onClose }: Props) => (
  <S.Wrapper role={role}>
    {children}
    {onClose && (
      <em role="close-icon" className="icon-close" onClick={onClose} />
    )}
  </S.Wrapper>
)

export default AvatarUploadStateWithImage
