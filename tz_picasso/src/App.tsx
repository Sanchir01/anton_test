import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Pages/Main'
import OnePost from './Pages/OnePost'
import Header from './components/Header'
import { RoutesReact } from './constants/Routes'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path={RoutesReact.MAIN} element={<Main />} />
				<Route path={RoutesReact.ONEPOST} element={<OnePost />} />
			</Routes>
		</>
	)
}
export default App
