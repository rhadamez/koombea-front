import { useAuth } from '../../store/AuthContext'
import * as S from './styles'

export function Files() {
  const { user } = useAuth()

  return (
    <S.Container>
      <span>Lista de files</span>
    </S.Container>
  )
}