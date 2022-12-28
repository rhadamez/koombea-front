import { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

export function Input({ ...rest}: Props) {
  return (
    <S.Container>
      <S.Input {...rest}/>
    </S.Container>
  )
}