import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '@/services/users.services'
import { User } from '@/models/user.models'

const UsersView = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getUsers().then((data) => setUsers(data))
  }, [])

  return (
    <>
      <ul className="max-w-md mx-auto">
        {
          users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
              <li className="py-3 sm:pb-4 border-b border-white hover:text-primary hover:bg-warning">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-white">
                      <b>Name:</b> {user.name}
                    </p>
                    <p className="text-sm font-medium text-white">
                      <b>Email:</b> {user.email}
                    </p>
                    <p className="text-sm font-medium text-white">
                      <b>Phone:</b> {user.phone}
                    </p>
                    <p className="text-sm font-medium text-white">
                      <b>Company:</b> {user.company.name}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))
        }
      </ul>
    </>
  )
}

export default UsersView