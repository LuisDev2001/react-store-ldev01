import '@/assets/css/Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export interface Props {
  id: string
  name: string
  price: number
  img: string
}

const Product = (props: Props) => {
  return (
    <div className="product">
      <img src={props.img} alt="Imagen del producto" />
      <div className='product-details'>
        <p>{props.name}</p>
        <div className='product-prices'>
          <span className='product-current__price'>${props.price}</span>
        </div>
      </div>
      <div className='product-actions'>
        <button className='product-actions__add'>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className='product-actions__fav'>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  )
}

export default Product