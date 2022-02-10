import { useEffect, useRef, useState } from 'react'

import * as S from './styles'

interface Props {
  scale?: number
  image?: File
  renderKey?: string
}

const CircleShapedImage = ({ renderKey, scale, image }: Props) => {
  const circleShapeRef = useRef<HTMLDivElement>(null)
  const [invalid, setInvalid] = useState(false)

  useEffect(() => {
    if (image) {
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = function (e) {
        if (circleShapeRef.current === null || !e.target) {
          setInvalid(true)
          return
        }
        circleShapeRef.current.style.backgroundImage = `url(${e.target.result})`
      }
    } else {
      setInvalid(true)
    }
  }, [image])

  return (
    <S.CircleShapeWrapper key={renderKey}>
      <S.CircleShape role="circle-image" ref={circleShapeRef} scale={scale} />
      {invalid && <em role="invalid-image" className="icon-warning" />}
    </S.CircleShapeWrapper>
  )
}

export default CircleShapedImage
