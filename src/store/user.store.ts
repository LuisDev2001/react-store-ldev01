import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/models/user.models'

interface UserState {
  userList: User[]
}

const initialState = {
  userList: []
} satisfies UserState as UserState

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.userList = action.payload
    }
  },
  selectors: {
    getUsers: (state) => state.userList
  }
})
