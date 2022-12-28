import { createContext, useState, useContext } from 'react'

import api from '../services/api'

interface User {
    id: string;
    username: string;
}

interface AuthState {
    token: string
    user: User
}

interface SignInCredentials {
    username: string
    password: string
}

interface AuthContextData {
    user: User
    signIn(credentials: SignInCredentials): Promise<void>
    signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: any){
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@koombea:token')
        const user = localStorage.getItem('@koombea:user')

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`
            return { token, user: JSON.parse(user) }
        }

        return {} as AuthState
    })

    async function signIn({ username, password }: SignInCredentials) {
        const response = await api.post('/sessions', {
            email: username,
            password
        })

        const { token, user }: AuthState = response.data

        localStorage.setItem('@koombea:token', token)
        localStorage.setItem('@koombea:user', JSON.stringify(user))

        api.defaults.headers.authorization = `Bearer ${token}`

        setData({ token, user })
    }

    function signOut() {
        localStorage.removeItem('@koombea:token')
        localStorage.removeItem('@koombea:user')

        setData({} as AuthState)
    }

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }