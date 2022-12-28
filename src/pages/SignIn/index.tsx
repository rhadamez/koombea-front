import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import * as S from './styles'

export function SignIn() {
  return (
    <S.Container>
      <S.Panel>
        <S.Title>Fullstack challenge</S.Title>
        <S.Subtitle>Insert the credentials</S.Subtitle>
        <Input placeholder='rhadamez123'/>
        <Input type='password' placeholder='123321'/>
        <Button text='Sign In'/>
      </S.Panel>
    </S.Container>
  )
}