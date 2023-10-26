import { configureStore } from '@reduxjs/toolkit'
import pageSlice from './page-slice'
import detailSlice from './detail-slice'

const store = configureStore({
  reducer: { page: pageSlice.reducer, detail: detailSlice.reducer },
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
