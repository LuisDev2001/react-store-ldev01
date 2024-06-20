import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '@/store/counter.store'
import { userSlice } from '@/store/user.store'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer
  }
})
