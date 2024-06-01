import '@/assets/css/ProductDetail.css'
import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'
import Product from '@/components/Product'
export interface Product {
  id: string
  name: string
  price: number
  img: string
}
const ProductDetailView = () => {
  const productsInStorage: Product[] = !localStorage.getItem("cart")
    ? localStorage.setItem("cart", JSON.stringify([]))
    : JSON.parse(localStorage.getItem("cart") || '[]')
  const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]')
  const { id } = useParams()
  const [quantity, setQuantity] = useState<number>(1)
  const findProduct = products?.find((product) => product.id === id)

  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.currentTarget.value))
  }

  const handleAddToCart = () => {
    if (findProduct) {
      productsInStorage.push(findProduct)
      localStorage.setItem('cart', JSON.stringify(productsInStorage))
    }
  }

  if (findProduct) {
    return (
      <div className='product-detail'>
        <Product {...findProduct} onAddToCart={handleAddToCart}>
          <input
            type="number"
            value={quantity}
            max="99"
            min="0"
            onChange={(event) => handleChangeQuantity(event)}
          />
        </Product>
      </div>
    )
  }

  return (
    <div>No se encontró el producto</div>
  )
}

export default ProductDetailView