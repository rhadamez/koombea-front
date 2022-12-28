import { GlobalStyle } from './global/styles'
import { SignIn } from "./pages/SignIn"
import { AuthProvider } from './store/AuthContext'

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <SignIn />
    </AuthProvider>
  )
}

export default App
