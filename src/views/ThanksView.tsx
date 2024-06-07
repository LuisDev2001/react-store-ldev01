import Button from "@/components/Button"
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const ThanksView = () => {

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([]))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center bg-[#f9f9f9] p-5">
      <h1 className="text-4xl text-gray-800 mb-5">¡Gracias por tu compra!</h1>
      <p className="text-lg text-gray-600 mb-7">
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
