import { Routes, Route } from 'react-router-dom'
import { Contacts } from './pages/Contacts'
import { DefaultLayout } from './pages/DefaultLayout'
import { Files } from './pages/Files'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Register } from './pages/Register'
import { SignIn } from './pages/SignIn'
import { UploadContacts } from './pages/UploadContacts'
import { useAuth } from './store/AuthContext'

export function Router() {
	const { user } = useAuth()

	return (
		<Routes>
			{user ? (
				<Route path='/' element={<DefaultLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/upload-contacts' element={<UploadContacts />} />
					<Route path='/files' element={<Files />} />
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
