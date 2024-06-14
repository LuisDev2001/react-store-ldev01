import type { ReactNode } from 'react'

export interface Button {
  variant: variant
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
}

export type variant = 'primary' | 'secondary'