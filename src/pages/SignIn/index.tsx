import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../store/AuthContext'
import * as S from './styles'

export function SignIn() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [serverError, setServerError] = useState('')
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  function changeInput(text: string, name: string) {
    setForm(oldData => {
      return {...oldData, [name]: text}
    })
  }

  async function handleLogin(e: any) {
    e.preventDefault()
    try {
      await signIn({ username: form.username, password: form.password})
      navigate('/upload-contacts')
    } catch(err: any) {
      const { message } = err.response.data
      if(message) {
        setServerError(message)
      } else {
        setServerError('An error happened :(')
      }
      console.log(message)
    }
  }

  async function goToRegister() {
    navigate('/register')
  }

  return (
    <S.Container>
      <S.Panel>
        <S.Title>Koombea challenge</S.Title>
        <S.Subtitle>Insert the credentials</S.Subtitle>
          <Input
            name='username'
            required
            value={form.username}
            placeholder='rhadamez123'
            label='Username'
            onChange={(e) => changeInput(e.currentTarget.value, e.currentTarget.name)}
            />
          <Input
            name='password'
            type='password'
            value={form.password}
            placeholder='12345'
            label='Password'
            onChange={(e) => changeInput(e.currentTarget.value, e.currentTarget.name)}
            />
          {serverError && (
            <S.ErrorMessage>{serverError}</S.ErrorMessage>
          )}
          <Button text='Sign In' type='submit' onClick={handleLogin}/>
        <S.OrLabel>or</S.OrLabel>
        <Button text='Register' onClick={goToRegister}/>
      </S.Panel>
    </S.Container>
  )
}