import { useState } from 'react'
import '@/assets/css/views/Checkout.css'
import Product from '@/components/Product'
import Button from '@/components/Button'
import { useNavigate } from 'react-router-dom';

export interface Product {
  id: string
  name: string
  price: number
  img: string
  quantity: number
}

const CheckoutView = () => {
  const router = useNavigate()
  const [isLoadingShipping, setIsLoadingShipping] = useState(false)
  const [productsInStorage, setProductsInStorage] = useState<Product[]>(JSON.parse(localStorage.getItem("cart") || '[]'))

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const updatedProducts = productsInStorage.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    )
    setProductsInStorage(updatedProducts)
    localStorage.setItem("cart", JSON.stringify(updatedProducts))
  }

  const handleFinishShipping = () => {
    setIsLoadingShipping(true)
    setTimeout(() => {
      router('/thanks', { replace: true })
      setIsLoadingShipping(false)
    }, 3000);
  }

  return (
    <div>
      <h2 className='checkout-title'>Carrito de compras</h2>
      <div className='checkout'>
        <div className='checkout-product-list'>
          {
            productsInStorage.map((product) => (
              <Product
                key={product.id}
                {...product}
              >
                <input
                  type="number"
                  max="99"
                  min="0"
                  value={product.quantity}
                  onChange={(event) => handleQuantityChange(product.id, Number(event.target.value))}
                />
              </Product>
            ))
          }
        </div>
        <div className='checkout-actions'>
          <p>Al finalizar la compra podrás recibir los productos en la comodidad de tu hogar.</p>
          <Button
            variant='primary'
            disabled={isLoadingShipping}
            onClick={handleFinishShipping}
          >
            {!isLoadingShipping ? 'Finalizar compra' : 'Cargando...'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutView
