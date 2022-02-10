import styled, { css } from 'styled-components'

interface SliderProps {
  min: number
  max: number
  value: number
}

const getLinearGradientCss = (position: number) => css`
  linear-gradient(to right, #3f80ff 0%, #3f80ff ${position}%, #b9d1ff ${position}%, #b9d1ff 100%)
`

export const Slider = styled.input`
  border-radius: 0.1rem;
  height: 0.2rem;
  width: 100%;
  margin: 1.5rem 0;
  appearance: none;
  background: ${({ min, max, value }: SliderProps) =>
    getLinearGradientCss(((value - min) / (max - min)) * 100)};

  &::-ms-thumb,
  &::-moz-range-thumb,
  &::-webkit-slider-thumb {
    border: none;
    width: 1.2rem;
    height: 1.2rem;
    background: #3f80ff;
    border-radius: 50%;
  }
`
