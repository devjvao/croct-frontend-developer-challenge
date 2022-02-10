import styled, { css } from 'styled-components'

import { UploadStateType } from './types'

interface ContainerProps {
  currentState: UploadStateType
}

const statesWithDashedBorder: UploadStateType[] = ['WAITING', 'SAVED']

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
