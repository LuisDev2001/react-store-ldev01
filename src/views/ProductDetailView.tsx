import { useParams } from 'react-router-dom'

export interface Product {
  id: string
  name: string
  price: number
  img: string
}
const ProductDetailView = () => {
  const products: Product[] = JSON.parse(localStorage.getItem('products') || '""')
  const { id } = useParams()
  const divStyle = {
    color: 'white',
    backgroundColor: '#000',
    fontSize: '4rem'
  }

  const findProduct = products.find((product) => product.id === id)

  return (
    <div style={divStyle}>
      Product details view {id}
      <p>{JSON.stringify(findProduct)}</p>
    </div>
  )
}

export default ProductDetailView