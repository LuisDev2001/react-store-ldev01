import NavBar from '@/components/NavBar'
import Product from '@/components/Product'
import '@/assets/css/App.css'

const products = Array.from({ length: 20 }, (_, index) => ({
  id: `${index + 1}`,
  name: `Producto Nike Black T-Shirt ${index + 1}`,
  price: (index + 1) * 10,
  img: '/productImage.jpg',
}));

const App = () => {
  return (
    <>
      <NavBar />
      <div className='product-list'>
        {
          products.map((product) => (
            <Product key={product.id} {...product} />
          ))
        }
      </div>
    </>
  )
}

export default App
