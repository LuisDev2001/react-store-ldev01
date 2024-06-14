import type { ReactNode } from 'react'

export interface Product {
  id: string
  name: string
  price: number
  discount: number
  img: string
  quantity?: number
  isFavorite?: boolean
}

export interface ProductCard extends Product {
  class?: string
  hasProductInCart?: boolean
  hasProductInFavorite?: boolean
  children?: ReactNode
  onAddToCart?: () => void
  onAddToFavorite?: () => void
  onPassNameProduct?: (id: string) => void
}