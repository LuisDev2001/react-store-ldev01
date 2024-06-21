import type { ReactNode } from 'react'

export interface Button {
  variant: variant
  children: ReactNode
  disabled?: boolean
  onClick?: (event: Event) => void
}

export type variant = 'primary' | 'secondary'