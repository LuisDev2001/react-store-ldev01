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

export interface ProductCard extends ProductInterface {
  class?: string
  hasProductInCart?: boolean
  hasProductInFavorite?: boolean
  hasDeleteProduct?: boolean
  children?: ReactNode
  onAddToCart?: () => void
  onAddToFavorite?: () => void
  onPassNameProduct?: (id: string) => void
  onDeleteProduct?: (event: Event) => void
}

export interface ProductInterface {
  name: string;
  img: string;
  price: string;
  discount: string;
  description: string;
  id?: string;
}
