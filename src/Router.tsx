import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './pages/DefaultLayout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Register } from './pages/Register'
import { SignIn } from './pages/SignIn'
import { useAuth } from './store/AuthContext'

export function Router() {
	const { user } = useAuth()

	return (
		<Routes>
			{user ? (
				<Route path='/' element={<DefaultLayout />}>
					<Route path='/' element={<Home />} />
				</Route>
			) : (
				<>
					<Route path='/login' element={<SignIn />} />
					<Route path='/register' element={<Register />} />
				</>
			)}
				<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
