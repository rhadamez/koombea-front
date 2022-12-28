import { Link } from 'react-router-dom'
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
  width: 100%;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  background-color: #fff;
`

export const Th = styled.th<ThProps>`
  width: ${({ width }) => width}px;
  text-align: start;
`

export const FileLink = styled.a`
  padding: 10px;
  color: #048c66;
  text-decoration: underline;
  border: none;

  &:hover {
    background-color: transparent;
  }
`