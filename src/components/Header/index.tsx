import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/AuthContext'
import { Button } from '../Button'
import * as S from './styles'

export function Header() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  async function handleSignOut() {
    signOut()
    navigate('/login')
  }

  return (
    <S.Container>
      <S.Content>
        <S.Menu>
          <Link to={user.id}>Upload Contacts</Link>
          <Link to={user.id}>Contact List</Link>
          <Link to={user.id}>Files</Link>
        </S.Menu>
        <S.UserInfo>
          <S.UserName>{user.username}</S.UserName>
            <Button text='Logout' onClick={handleSignOut}/>
        </S.UserInfo>
        </S.Content>
    </S.Container>
  )
}