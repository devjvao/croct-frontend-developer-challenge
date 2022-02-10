import {
  ChangeEvent,
  DragEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react'

import * as S from './styles'
import imageUtils from '../../utils/ImageUtils'

interface Props {
  role?: string
  children: ReactNode
  onSelectValidFile: (file: File) => void
  onSelectInvalidFile: () => void
}

const UploadArea = ({
  role,
  children,
  onSelectValidFile,
  onSelectInvalidFile
}: Props) => {
  const [files, setFiles] = useState<FileList | null>(null)

  useEffect(() => {
    const file = files?.[0] || null
    if (file !== null) {
      imageUtils.validateImageType(file)
        ? onSelectValidFile(file)
        : onSelectInvalidFile()
    }
  }, [files, onSelectValidFile, onSelectInvalidFile])

  const onSelect = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setFiles(e.target.files)
  }, [])

  const onDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setFiles(e.dataTransfer.files)
  }, [])

  const preventDefault = useCallback(
    (e: DragEvent<HTMLDivElement>) => e.preventDefault(),
    []
  )

  return (
    <S.DropZone
      role={role}
      onDrop={onDrop}
      onDragOver={preventDefault}
      onDragEnter={preventDefault}
      onDragLeave={preventDefault}
    >
      <S.FileInput role="file-input" type="file" onChange={onSelect} />
      {children}
    </S.DropZone>
  )
}

export default UploadArea
