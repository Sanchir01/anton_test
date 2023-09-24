import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPosts } from '../../types/Posts.interface'

const url = 'http://localhost:3000'

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({ baseUrl: url }),
	tagTypes: ['allPosts'],
	endpoints: builder => ({
		getAllPosts: builder.query<IPosts[], undefined>({
			query: () => ({ url: '/posts' }),
		}),
	}),
})

export const { useGetAllPostsQuery } = postsApi
