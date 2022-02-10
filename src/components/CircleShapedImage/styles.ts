import styled from 'styled-components'

interface CircleShapeProps {
  scale?: number
}

export const CircleShapeWrapper = styled.div`
  width: 11.3rem;
  height: 11.3rem;
  max-width: 11.3rem;
  max-height: 11.3rem;
  overflow: hidden;
  margin: auto;
  border-radius: 50%;
  background-color: #c3cbd5;
  font-size: 2rem;
  color: #ffffff;
  position: relative;

  > em {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const CircleShape = styled.div.attrs<CircleShapeProps>((props) => ({
  style: {
    transform: `scale(${props.scale})`
  }
}))<CircleShapeProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
