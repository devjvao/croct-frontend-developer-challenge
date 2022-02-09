import { ReactNode } from 'react'

export type UploadStateType =
  | 'WAITING'
  | 'CROPPING'
  | 'SAVED_AND_WAITING'
  | 'FAILED'

export type ContentByUploadStateType = {
  [key in UploadStateType]: ReactNode
}
