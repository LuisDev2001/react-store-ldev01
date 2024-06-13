import Product from '@/components/Product'
import Button from '@/components/Button'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const products = Array.from({ length: 20 }, (_, index) => ({
  id: `${index + 1}`,
  name: `Producto Nike Black T-Shirt ${index + 1}`,
  price: (index + 1) * 10,
  discount: index < 10 ? (index + 1) * 2 : 0,
  img: '/productImage.jpg',
}))

localStorage.setItem('products', JSON.stringify(products))

if (!localStorage.getItem("favoriteProducts")) {
  localStorage.setItem('favoriteProducts', JSON.stringify([]))
}

const HomeView = () => {
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(5)
  const newProductList = products.slice(from, to)

  const handleNextPage = () => {
    setFrom(from + 5)
    setTo(to + 5)
  }

  const handlePrevPage = () => {
    setFrom(from - 5)
    setTo(to - 5)
  }

  return (
    <div className='w-full max-w-[550px] mx-auto mt-4 flex flex-col gap-4'>
      {
        newProductList.map((product) => (
          <Link to={`product-detail/${product.id}`} key={product.id}>
            <Product {...product} />
          </Link>
        ))
      }

      <div className='flex items-center justify-end gap-4'>
        <Button
          variant='secondary'
          disabled={from === 0}
          onClick={handlePrevPage}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <Button
          variant='secondary'
          onClick={handleNextPage}
          disabled={to === products.length}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>
    </div>
  )
}

export default HomeView
