import { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RoutesReact } from '../constants/Routes'
import { useGetOnePostQuery } from '../store/api/getOnePost'
import styles from '../styles/oneProduct.module.scss'

const OnePost: FC = () => {
	const { id } = useParams<string>()
	const navigate = useNavigate()

	const { data, isError, isLoading, isSuccess } = useGetOnePostQuery(id!)
	useEffect(() => {
		if (isError) {
			alert('Такой страницы не существует')
			navigate(RoutesReact.MAIN)
		}
	}, [isError])

	return (
		<div className={styles.main}>
			{isLoading ? (
				<div className=''>Loading</div>
			) : isSuccess ? (
				<div className={styles.content}>
					<div className={styles.title}>{data.title}</div>
					<div className={styles.desc}>{data.description}</div>
				</div>
			) : (
				'Error'
			)}
		</div>
	)
}

export default OnePost
