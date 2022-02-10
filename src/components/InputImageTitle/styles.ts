import styled from 'styled-components'

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
