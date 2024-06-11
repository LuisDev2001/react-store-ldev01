import { useState } from 'react'
import { Link } from 'react-router-dom'
import Product from '@/components/Product'
import Button from '@/components/Button'
import { useNavigate } from 'react-router-dom';

export interface Product {
  id: string
  name: string
  price: number
  discount: number
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
      <h2 className="text-white text-2xl max-w-[550px] mx-auto my-4 text-center md:text-4xl">
        Carrito de compras
      </h2>
      {
        productsInStorage.length ?
          <div className="max-w-[800px] mx-auto flex flex-col items-start justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center justify-center w-full gap-4 md:w-fit">
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
                      className="w-8 p-1 border border-gray-300 rounded md:w-16"
                    />
                  </Product>
                ))
              }
            </div>
            <div className="flex-1 w-full h-52 p-4 rounded-lg bg-white flex flex-col items-center justify-center gap-4 sticky top-24">
              <p className="text-primary text-center text-xs md:text-sm">
                Al finalizar la compra podrás recibir los productos en la comodidad de tu hogar.
              </p>
              <Button
                variant='primary'
                disabled={isLoadingShipping}
                onClick={handleFinishShipping}
              >
                {!isLoadingShipping ? 'Finalizar compra' : 'Cargando...'}
              </Button>
            </div>
          </div> :
          <div className="max-w-[800px] mx-auto flex flex-col items-center justify-center   gap-4 text-white">
            No hay productos que comprar
            <div>
              <Link className='hover:underline' to="/">Regresar al home</Link>
            </div>
          </div>
      }

    </div>
  )
}

export default CheckoutView
