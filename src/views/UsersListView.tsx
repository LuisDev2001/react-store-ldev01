import { useEffect } from 'react'
import { userSlice } from '@/store/user.store'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useUsers from '@/hooks/useUsers'

const UsersView = () => {
  const { getUserList } = useUsers()
  const users = useSelector(userSlice.selectors.getUsers)

  useEffect(() => {
    getUserList()
  })

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
                      <b>Name:</b> {user.name} - ({user.username})
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