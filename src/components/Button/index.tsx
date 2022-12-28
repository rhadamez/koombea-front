import * as S from './styled'

interface Props {
  text: string
}

export function Button({ text }: Props) {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}