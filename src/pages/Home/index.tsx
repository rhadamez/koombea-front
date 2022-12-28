import { useAuth } from '../../store/AuthContext'
import * as S from './styles'

export function Home() {
  const { user } = useAuth()

  return (
    <S.Container>
      <span>{user.username}</span>
    </S.Container>
  )
}