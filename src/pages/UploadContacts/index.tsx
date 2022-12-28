import { useAuth } from '../../store/AuthContext'
import * as S from './styles'

export function UploadContacts() {
  const { user } = useAuth()

  return (
    <S.Container>
      <span>Lista de UploadContacts</span>
    </S.Container>
  )
}