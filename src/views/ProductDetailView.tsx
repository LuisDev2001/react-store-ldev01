import '@/assets/css/ProductDetail.css'
import { useParams } from 'react-router-dom'
import Product from '@/components/Product'

export interface Product {
  id: string
  name: string
  price: number
  img: string
}
const ProductDetailView = () => {
  const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]')
  const { id } = useParams()


  const findProduct = products?.find((product) => product.id === id)

  if (findProduct) {
    return (
      <div className='product-detail'>
        <Product {...findProduct} />
      </div>
    )
  }

  return (
    <div>No se encontró el producto</div>
  )
}

export default ProductDetailView