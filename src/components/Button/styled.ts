import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.button`
  height: 35px;

  border: none;
  background-color: #fff;
  cursor: pointer;
  border-radius: 17px;
  transition: all 0.3s;

  &:hover {
    background-color: #00d084;

    & > span {
      color: #fff;
    }
  }

  &:active {
    background-color: ${darken(0.1, '#00d084')};
  }
`

export const Text = styled.span`
  font-size: 16px;
  color: #058207;
`