import { API } from '@/api'
import { User } from '@/models/user.models'

export const getUsers = async (): Promise<User[]> => {
  const { data } = await API.get<User[]>('/users')
  return data
}

export const getUser = async (id: string): Promise<User> => {
  const { data } = await API.get<User>(`/users/${id}`)
  return data
}
