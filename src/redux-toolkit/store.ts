import { configureStore } from '@reduxjs/toolkit'
import orderSlice from './orderSlice.ts'

export const store = configureStore({
  reducer: {
    orders: orderSlice,
  },
  //middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(pokemonApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch