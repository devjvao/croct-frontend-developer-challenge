import { useEffect, useRef, useState } from 'react'

import * as S from './styles'

interface Props {
  zoom?: number
  image?: File
}

const CircleShapedImage = ({ zoom, image }: Props) => {
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
    <S.CircleShapeWrapper>
      <S.CircleShape ref={circleShapeRef} zoom={zoom} />
      {invalid && <em className="icon-warning" />}
    </S.CircleShapeWrapper>
  )
}

export default CircleShapedImage
