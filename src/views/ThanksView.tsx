import '@/assets/css/views/Thanks.css'
import Button from "@/components/Button"
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const ThanksView = () => {

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([]))
  }, [])

  return (
    <div className="thanks-container">
      <h1 className="thanks-title">¡Gracias por tu compra!</h1>
      <p className="thanks-message">
        Tu pedido ha sido realizado con éxito. Pronto recibirás una confirmación en tu correo electrónico.
      </p>
      <Link to="/">
        <Button variant="secondary">
          Volver a la tienda
        </Button>
      </Link>
    </div>
  )
}

export default ThanksView