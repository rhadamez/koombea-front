import { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ label, ...rest}: Props) {
  return (
    <S.Container>
      {label && (
        <S.Label>{label}</S.Label>
      )}
      <S.Input {...rest}/>
    </S.Container>
  )
}