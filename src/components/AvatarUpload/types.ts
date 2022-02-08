import { ReactNode } from 'react'

export const uploadState = {
  WAITING: 'WAITING',
  CROPPING: 'CROPPING',
  SAVED_AND_WAITING: 'SAVED_AND_WAITING',
  FAILED: 'FAILED'
}

export type UploadStateType = keyof typeof uploadState

export type ContentByUploadStateType = {
  [key in UploadStateType]: ReactNode
}
