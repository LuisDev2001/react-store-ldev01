import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '@/store/counter.store'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})
