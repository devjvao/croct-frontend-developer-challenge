import * as S from './styles'

interface Props {
  className?: string
}

const InputImageTitle = ({ className }: Props) => (
  <S.TitleWrapper className={className}>
    <S.Title>
      <em className="icon-image" />
      <span role="title">Organization Logo</span>
    </S.Title>
    <S.Subtitle role="subtitle">
      Drop the image here or click to browse
    </S.Subtitle>
  </S.TitleWrapper>
)

export default InputImageTitle
