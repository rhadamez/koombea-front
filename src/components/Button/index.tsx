import { ButtonHTMLAttributes } from 'react'
import * as S from './styled'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button({ text, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}