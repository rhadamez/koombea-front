import styled from 'styled-components'

export const Container = styled.div`
  min-height: 80px;
  width: 100%;
  display: flex;
  align-items: center;

  background-color: #03454f;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`

export const Menu = styled.div`
  display: flex;
  gap: 10px;
`

export const UserName = styled.span`
  padding: 10px;
  font-size: 16px;
  color: #fff;
`

export const UserInfo = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
`