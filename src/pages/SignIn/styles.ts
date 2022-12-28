import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #048c66;
`

export const Title = styled.h1`
  color: #fff;
  align-self: center;
`

export const Subtitle = styled.span`
  color: #fff;
`

export const Panel = styled.div`
  max-width: 350px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 20px;

  border-radius: 10px;
  background-color: #03454f;
`