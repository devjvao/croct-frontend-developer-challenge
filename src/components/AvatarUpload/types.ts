import { ReactNode } from 'react'

export type UploadStateType = 'WAITING' | 'CROPPING' | 'SAVED' | 'FAILED'

export type ContentByUploadStateType = {
  [key in UploadStateType]: ReactNode
}
