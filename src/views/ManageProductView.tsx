import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { postProduct } from '@/services/product.service'
import Button from "@/components/Button"
import type { ProductInterface } from '@/models/product.models'

const ManageProductView = () => {
  const formCreateProduct = useRef<HTMLFormElement | null>(null)

  const [isLoading, setIsLoading] = useState(false)

  const [payload, setPayload] = useState<ProductInterface>({
    name: '',
    img: '',
    price: '',
    discount: '',
    description: ''
  })

  const handleCreateProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    const formData = new FormData(event.currentTarget)
    const newPayload = { ...payload }

    for (const [key, value] of formData.entries()) {
      if (key in newPayload) {
        newPayload[key as keyof ProductInterface] = value as string
      }
    }

    setPayload(newPayload)

    postProduct(newPayload).then((data) => {
      if (data) {
        formCreateProduct.current?.reset()
      }
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <div>
      <div className='text-white text-lg'>
        <Link to="/">⬅ Regresar al home</Link>
      </div>
      <div className="rounded-2xl p-4 bg-white max-w-[500px] mx-auto">
        <h2 className="text-2xl mb-4 text-center font-bold">Crear un producto</h2>
        <form ref={formCreateProduct} onSubmit={(event) => handleCreateProduct(event)} className="flex flex-col gap-4">
          <input className="block border p-2 rounded-md" name="name" type="text" placeholder="Nombre del producto" />
          <input className="block border p-2 rounded-md" name="img" type="text" placeholder="Imagen del producto" />
          <input className="block border p-2 rounded-md" name="price" type="text" placeholder="Precio del producto" />
          <input className="block border p-2 rounded-md" name="discount" type="text" placeholder="Descuento del producto" />
          <input className="block border p-2 rounded-md" name="description" type="text" placeholder="Descripción del producto" />

          <Button variant="primary" disabled={isLoading}>Crear producto</Button>
        </form>
      </div>
    </div>
  )
}

export default ManageProductView