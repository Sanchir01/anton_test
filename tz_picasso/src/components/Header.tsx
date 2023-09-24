import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RoutesReact } from '../constants/Routes'
import styles from '../styles/Header.module.scss'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__content}>
				<Link to={RoutesReact.MAIN}>Header</Link>
			</div>
		</div>
	)
}

export default Header
