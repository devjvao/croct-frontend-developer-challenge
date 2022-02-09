import styled from 'styled-components'

export const DropZone = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

export const FileInput = styled.input`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`
