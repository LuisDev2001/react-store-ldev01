import { getUsers } from '@/services/users.service'
import { userSlice } from '@/store/user.store'
import { useDispatch } from 'react-redux'
const useUsers = () => {
  const dispatch = useDispatch()
  const { setUsers } = userSlice.actions

  const getUserList = async () => {
    const data = await getUsers()
    dispatch(setUsers(data))
  }

  return {
    getUserList
  }
}

export default useUsers