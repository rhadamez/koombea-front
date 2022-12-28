import { useAuth } from '../../store/AuthContext'
import { Button } from '../Button'
import * as S from './styles'

export function Header() {
  const { user } = useAuth()

  return (
    <S.Container>
      <S.Content>
        <S.Menu>
          <Button text='New Contacts'/>
          <Button text='Contacts'/>
          <Button text='Uploads'/>
        </S.Menu>
        <S.UserInfo>
          <S.UserName>{user.username}</S.UserName>
            <Button text='Logout'/>
        </S.UserInfo>
        </S.Content>
    </S.Container>
  )
}