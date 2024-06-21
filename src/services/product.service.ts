import { API } from '@/api/product'
import type { ProductInterface } from '@/models/product.models'

export const getProducts = async (): Promise<ProductInterface[]> => {
  const { data } = await API.get<ProductInterface[]>('/products')
  return data
}

export const getProduct = async (id: string): Promise<ProductInterface> => {
  const { data } = await API.get<ProductInterface>(`/products/${id}`)
  return data
}

export const postProduct = async (payload: ProductInterface): Promise<ProductInterface> => {
  const { data } = await API.post<ProductInterface>('/products', payload)
  return data
}

export const deleteProduct = async (id: string) => {
  const { data } = await API.delete(`/products/${id}`)
  return data
}
