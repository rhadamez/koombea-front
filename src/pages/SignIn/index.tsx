import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../store/AuthContext'
import * as S from './styles'

export function SignIn() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  function changeInput(text: string, name: string) {
    setForm(oldData => {
      return {...oldData, [name]: text}
    })
  }

  async function handleLogin() {
    try {
      await signIn({ username: form.username, password: form.password})
      navigate('/')
    } catch(err) {
    }
  }

  return (
    <S.Container>
      <S.Panel>
        <S.Title>Fullstack challenge</S.Title>
        <S.Subtitle>Insert the credentials</S.Subtitle>
        <Input
          name='username'
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
        <Button text='Sign In' onClick={handleLogin}/>
      </S.Panel>
    </S.Container>
  )
}