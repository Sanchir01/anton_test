import { FC } from 'react'
import { useGetAllPostsQuery } from '../store/api/posts'

const Main: FC = () => {
	const { data, isSuccess, isLoading } = useGetAllPostsQuery(undefined)
	return (
		<div className=''>
			{isLoading
				? 'loading'
				: isSuccess
				? data.map(item => (
						<div key={item.id} className=''>
							{item.id}
						</div>
				  ))
				: 'error'}
		</div>
	)
}

export default Main
