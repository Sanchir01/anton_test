import { IPosts } from '../../types/Posts.interface'
import { postsApi } from './posts'

export const onePostApi = postsApi.injectEndpoints({
	endpoints: builder => ({
		getOnePost: builder.query<IPosts, string>({
			query: id => `/posts/${id}`,
		}),
	}),
})

export const {useGetOnePostQuery} = onePostApi