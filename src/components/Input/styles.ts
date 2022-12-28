import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 5px;

  border-radius: 3px;
  border: 2px solid transparent;
  font-size: 16px;

  transition: all 0.3s;
  &:focus {
    border: 2px solid #048c66;
  }
`

export const Label = styled.span`
  margin-bottom: 5px;
  color: #fff;
`

export const Error = styled.span`
  color: #820404;
`