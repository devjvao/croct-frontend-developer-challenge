import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 17.7rem auto;
  width: 100%;
  height: 100%;
  align-items: center;
  font-size: 1.6rem;
  line-height: 180%;
  letter-spacing: -0.032rem;
  position: relative;

  em.icon-close {
    position: absolute;
    top: 3.575rem;
    right: 2.875rem;
    color: #677489;
    font-size: 1.25rem;
    cursor: pointer;
  }
`
