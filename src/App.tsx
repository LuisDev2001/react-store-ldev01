import NavBar from '@/components/NavBar'
import Product from '@/components/Product'
import { Link } from 'react-router-dom'
import '@/assets/css/App.css'

const products = Array.from({ length: 20 }, (_, index) => ({
  id: `${index + 1}`,
  name: `Producto Nike Black T-Shirt ${index + 1}`,
  price: (index + 1) * 10,
  img: '/productImage.jpg',
}));

localStorage.setItem('products', JSON.stringify(products))

const App = () => {
  return (
    <>
      <NavBar />
      <div className='product-list'>
        {
          products.map((product) => (
            <Link to={`product-detail/${product.id}`} key={product.id}>
              <Product {...product} />
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default App
