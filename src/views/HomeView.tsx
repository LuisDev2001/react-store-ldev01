import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Product from '@/components/Product'
import Button from '@/components/Button'
import { getProducts, deleteProduct } from '@/services/product.service'
import type { ProductInterface } from '@/models/product.models'

const HomeView = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])
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

  const handleDeleteProduct = (event: Event, id: string) => {
    event.preventDefault()
    deleteProduct(id).then(() => {
      alert('Producto eliminado ' + id)
      getProducts().then((data) => {
        setProducts(data)
      })
    })
  }

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <div className='w-full max-w-[550px] mx-auto mt-4 flex flex-col gap-4'>
      {
        newProductList.map((product) => (
          <Link to={`product-detail/${product.id}`} key={product.id}>
            <Product {...product} onDeleteProduct={(event: Event) => handleDeleteProduct(event, product.id || '')} hasDeleteProduct />
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
