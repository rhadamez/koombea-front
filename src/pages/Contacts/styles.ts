import styled from 'styled-components'

interface ThProps {
  width: number
}

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  margin: 20px;

  font-size: 24px;
  color: #fff;
`

export const Table = styled.table`
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  background-color: #fff;
`

export const Th = styled.th<ThProps>`
  width: ${({ width }) => width}px;
  text-align: start;
`