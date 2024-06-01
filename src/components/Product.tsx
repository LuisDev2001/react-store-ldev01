import '@/assets/css/Product.css'
import type { ReactNode } from 'react'
import { useMatches } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export interface Props {
  id: string
  name: string
  price: number
  img: string
  children?: ReactNode
  onAddToCart?: () => void
  onAddToFavorite?: () => void
}

const Product = (props: Props) => {
  const matches = useMatches()
  const hasActions = matches.find((route) => route.pathname.includes(`/product-detail/${props.id}`))

  return (
    <div className="product">
      <img src={props.img} alt="Imagen del producto" />
      <div className='product-details'>
        <p>{props.name}</p>
        <div className='product-prices'>
          <span className='product-current__price'>${props.price}</span>
        </div>
      </div>
      <div className='product-qty'>
        {props.children}
      </div>
      {
        hasActions &&
        <div className='product-actions'>
          <button className='product-actions__add' onClick={props.onAddToCart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <button className='product-actions__fav' onClick={props.onAddToFavorite}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      }
    </div>
  )
}

export default Product