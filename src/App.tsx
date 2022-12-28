import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './global/styles'
import { Router } from './Router'
import { AuthProvider } from './store/AuthContext'

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
