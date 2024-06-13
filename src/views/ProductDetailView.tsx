import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'
import Product from '@/components/Product'
export interface Product {
  id: string
  name: string
  price: number
  discount: number
  img: string
  quantity: number
  isFavorite?: boolean
}
const ProductDetailView = () => {
  const { productId } = useParams()

  const cart: Product[] = !localStorage.getItem("cart")
    ? localStorage.setItem("cart", JSON.stringify([]))
    : JSON.parse(localStorage.getItem("cart") || '[]')

  const favoriteProducts: Product[] = !localStorage.getItem("favoriteProducts")
    ? localStorage.setItem("favoriteProducts", JSON.stringify([]))
    : JSON.parse(localStorage.getItem("favoriteProducts") || '[]')

  const [quantity, setQuantity] = useState<number>(1)
  const [hasProductInCart, setHasProductInCart] = useState<boolean>(false)
  const [findProduct, setFindProduct] = useState<Product>()
  const [hasProductInFavorite, setHasProductInFavorite] = useState<boolean>(false)

  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.currentTarget.value))
  }

  const handleAddToCart = () => {
    if (findProduct) {
      cart.push({
        ...findProduct,
        quantity
      })
      localStorage.setItem('cart', JSON.stringify(cart))
      setHasProductInCart(!!cart?.find((productCart) => productCart.id === productId))
    }
  }

  const handleAddToFavorite = () => {
    const findFavoriteProducts = favoriteProducts?.find((prod) => prod.id === productId)

    if (findFavoriteProducts?.isFavorite) {
      localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts.filter((product) => product.id !== productId)))
      setHasProductInFavorite(false)
      return
    }

    if (findProduct) {
      favoriteProducts.push({
        ...findProduct,
        isFavorite: true
      })
      localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts))
      setHasProductInFavorite(true)
      return
    }
  }

  useEffect(() => {
    const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]')
    setFindProduct(products?.find((productCart) => productCart.id === productId))
    setHasProductInCart(!!cart?.find((productCart) => productCart.id === productId))
    setHasProductInFavorite(!!favoriteProducts?.find((productCart) => productCart.id === productId))
  }, [productId])
  // Esto asegura que el efecto solo se ejecute cuando estos valores cambien, evitando potenciales bucles infinitos.

  if (findProduct) {
    return (
      <div className='mx-w-[550px] mx-auto mt-8'>
        {JSON.stringify(hasProductInFavorite)}
        <Product
          {...findProduct}
          hasProductInCart={hasProductInCart}
          hasProductInFavorite={hasProductInFavorite}
          onAddToCart={handleAddToCart}
          onAddToFavorite={handleAddToFavorite}
          class='flex-col border border-solid border-white p-8 w-[300px] mx-auto'
        >
          <input
            type="number"
            value={quantity}
            max="99"
            min="0"
            onChange={(event) => handleChangeQuantity(event)}
            className="w-8 p-1 border border-gray-300 rounded md:w-16"
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