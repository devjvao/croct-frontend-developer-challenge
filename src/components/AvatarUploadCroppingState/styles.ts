import styled from 'styled-components'

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

  em.icon-close {
    position: absolute;
    top: 3.575rem;
    right: 2.875rem;
    color: #677489;
    font-size: 1.25rem;
    cursor: pointer;
  }
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
