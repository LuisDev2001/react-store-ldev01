import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getUser } from '@/services/users.service'
import { User } from '@/models/user.models'


const UserView = () => {
  const { id } = useParams()
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      getUser(id).then((data) => {
        setLoading(true)
        setTimeout(() => {
          setUser(data)
          setLoading(false)
        }, 3000)
      })
    }
  }, [id])

  return (
    <>
      <h2 className='text-white text-4xl font-bold mb-4'>User details</h2>
      {
        !loading ?
          <div className='text-white'>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <p>{user?.phone}</p>
          </div> :
          <div className='text-white text-center'>
            Cargando información ...
          </div>
      }
    </>
  )
}

export default UserView