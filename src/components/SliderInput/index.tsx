import * as S from './styles'

interface Props {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
}

const SliderInput = ({ min, max, value, onChange }: Props) => (
  <S.Slider
    type="range"
    min={min}
    max={max}
    value={value}
    onChange={({ target: { value: radius } }) => onChange(+radius)}
  />
)

export default SliderInput
