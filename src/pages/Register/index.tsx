import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import api from '../../services/api'
import * as S from './styles'

export function Register() {
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

  async function handleRegister() {
    try {
      await api.post('/users', {
        username: form.username,
        password: form.password
      })
      navigate('/login')
    } catch(err) {
    }
  }

  return (
    <S.Container>
      <S.Panel>
        <S.Title>Koombea challenge</S.Title>
        <S.Subtitle>Create your user</S.Subtitle>
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
          required
          type='password'
          value={form.password}
          placeholder='12345'
          label='Password'
          onChange={(e) => changeInput(e.currentTarget.value, e.currentTarget.name)}
          />
        <Button text='Create user' onClick={handleRegister}/>
        <S.OrLabel>or</S.OrLabel>
        <Button text='Go back' onClick={() => navigate('/login')}/>
      </S.Panel>
    </S.Container>
  )
}