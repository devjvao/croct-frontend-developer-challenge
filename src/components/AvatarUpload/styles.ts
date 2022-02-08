import styled, { css } from 'styled-components'

import { uploadState, UploadStateType } from './types'

interface StyleProps {
  currentState: UploadStateType
}

const statesWithDashedBorder = [
  uploadState.WAITING,
  uploadState.SAVED_AND_WAITING
]

const dashedBorderCss = css`
  border: 0.2rem dashed #c7cdd3;
`

export const Wrapper = styled.div`
  width: 34.5625rem;
  height: 11.0625rem;
  background-color: #f2f5f8;
  border-radius: 0.8rem;

  ${(props: StyleProps) =>
    statesWithDashedBorder.includes(props.currentState) && dashedBorderCss};
`
