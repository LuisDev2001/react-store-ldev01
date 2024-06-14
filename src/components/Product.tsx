import { useEffect, useState } from 'react'
import { useMatches } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart as faHeartFill } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons'
import type { ProductCard as Props } from '@/models/product.models'

const Product = (props: Props) => {
  const matches = useMatches()
  const [priceDiscount, setPriceDiscount] = useState(0)
  const hasActions = matches.find((route) => route.pathname.includes(`/product-detail/${props.id}`))

  useEffect(() => {
    const calcDiscount = props.price - ((props.price * props.discount) / 100)
    setPriceDiscount(calcDiscount)
  }, [props.price, props.discount])

  return (
    <div className={`w-full flex items-center justify-between gap-2 ${props.class} md:gap-8`}>
      <img className='block w-16 object-cover rounded-md md:w-24' src={props.img} alt="Imagen del producto" />
      <div>
        <p className='font-bold text-base text-white mb-2 md:text-lg'>{props.name}</p>
        {
          props.discount !== 0 &&
          <span className='text-danger text-sm inline-block mb-1.5'>
            {props.discount}% OFF
          </span>
        }
        <div className='flex items-center gap-4'>
          <span className={`inline-block px-1.5 py-1 rounded text-sm w-12 text-center bg-warning text-primary ${props.discount !== 0 && 'line-through'}`}>
            ${props.price}
          </span>
          {
            props.discount !== 0 &&
            <span className='inline-block px-1.5 py-1 rounded text-sm w-12 text-center bg-danger text-white'>${priceDiscount}</span>
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
        <div className='text-danger flex items-center gap-4'>
          {
            !props.hasProductInCart &&
            <button className='text-warning' onClick={props.onAddToCart}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          }
          <button className='text-danget' onClick={props.onAddToFavorite}>
            <FontAwesomeIcon icon={props.hasProductInFavorite ? faHeartFill : faHeartOutline} />
          </button>
          {/* <button onClick={() => props.onPassNameProduct && props.onPassNameProduct(props.id)}>
            Nombre del producto ?
          </button> */}
        </div>
      }
    </div>
  )
}

export default Product