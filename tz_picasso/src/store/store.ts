import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postsApi } from './api/posts'

const reducers = combineReducers({
	[postsApi.reducerPath]: postsApi.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(postsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
