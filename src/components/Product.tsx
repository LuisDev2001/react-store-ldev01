import '@/assets/css/Product.css'
import { useEffect, useState } from 'react'
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
  discount: number
  hasProductInCart?: boolean
  children?: ReactNode
  onAddToCart?: () => void
  onAddToFavorite?: () => void
}

const Product = (props: Props) => {
  const matches = useMatches()
  const [priceDiscount, setPriceDiscount] = useState(0)
  const hasActions = matches.find((route) => route.pathname.includes(`/product-detail/${props.id}`))

  useEffect(() => {
    const calcDiscount = props.price - ((props.price * props.discount) / 100)
    setPriceDiscount(calcDiscount)
  }, [props.price, props.discount])

  return (
    <div className="product">
      <img src={props.img} alt="Imagen del producto" />
      <div className='product-details'>
        <p>{props.name}</p>
        {
          props.discount !== 0 &&
          <span className='product-discount'>{props.discount}% OFF</span>
        }
        <div className='product-prices'>
          <span className={`product-current__price ${props.discount !== 0 && 'crossout'}`}>
            ${props.price}
          </span>
          {
            props.discount !== 0 &&
            <span className='product-discount__price'>${priceDiscount}</span>
          }
        </div>
      </div>
      {
        !props.hasProductInCart &&
        <div className='product-qty'>
          {props.children}
        </div>
      }
      {
        hasActions &&
        <div className='product-actions'>
          {
            !props.hasProductInCart &&
            <button className='product-actions__add' onClick={props.onAddToCart}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          }
          <button className='product-actions__fav' onClick={props.onAddToFavorite}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      }
    </div>
  )
}

export default Product