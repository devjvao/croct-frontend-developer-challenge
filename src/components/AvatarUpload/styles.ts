import styled, { css } from 'styled-components'

import { UploadStateType } from './types'

interface ContainerProps {
  currentState: UploadStateType
}

const statesWithDashedBorder: UploadStateType[] = [
  'WAITING',
  'SAVED_AND_WAITING'
]

const dashedBorderCss = css`
  border: 0.2rem dashed #c7cdd3;
`

export const Container = styled.div`
  width: 55.3rem;
  height: 17.7rem;
  background-color: #f2f5f8;
  border-radius: 0.8rem;

  ${(props: ContainerProps) =>
    statesWithDashedBorder.includes(props.currentState) && dashedBorderCss};
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-flow: column;
  font-size: 1.4rem;
  line-height: 180%;
`

export const Title = styled.div`
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: auto 1fr;
  place-items: center;
  font-weight: 500;
  color: #495567;
`

export const Subtitle = styled.span`
  font-weight: normal;
  color: #677489;
`

export const WrapperWithImage = styled.div`
  display: grid;
  grid-template-columns: 17.7rem auto;
  width: 100%;
  height: 100%;
  align-items: center;
  font-size: 1.6rem;
  line-height: 180%;
  letter-spacing: -0.032rem;
  position: relative;

  > ${TitleWrapper} {
    margin-left: -5rem;
  }

  em.icon-close {
    position: absolute;
    top: 3.575rem;
    right: 2.875rem;
    color: #677489;
    font-size: 1.25rem;
    cursor: pointer;
  }
`

export const FeedbackMessage = styled.span`
  display: block;
  color: #c64d32;
  font-weight: normal;
`

export const TextLink = styled.span`
  display: block;
  text-decoration-line: underline;
  color: #3d485f;
  font-weight: 500;
  cursor: pointer;
`

export const CropSliderWrapper = styled.div`
  display: grid;
  width: 27.6rem;
  line-height: 180%;
  letter-spacing: -0.032rem;
`

export const CropTitle = styled.span`
  display: block;
  font-size: 1.6rem;
  color: #677489;
`

export const SaveButton = styled.button`
  width: 10.9rem;
  height: 3.2rem;
  border: none;
  background: #3d485f;
  border-radius: 16px;
  font-weight: 500;
  font-size: 1.4rem;
  color: #ffffff;
  cursor: pointer;
  justify-self: flex-end;
  margin-top: 2rem;
`
