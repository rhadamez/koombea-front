import styled from 'styled-components'

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

export const Panel = styled.div`
  width: 500px;
  min-height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  background-color: #03454f;
`

export const InputContainer = styled.label`
  position: relative;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  padding: 5px;
  display: flex;  
  align-items: center;
  justify-content: center;

  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;

  input {
    display: none;
  }
`

export const TextInput = styled.span`
  position: absolute;

  color: #000;
`

export const CsvInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: blue;
`

export const FieldContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    color: #fff;
    font-size: 18px;
  }
`

export const FieldsHeader = styled.div`
  border-bottom: 2px solid #fff;
  padding-bottom: 30px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > span {
    font-weight: 600;
    flex: 1;
    color: #fff;
    font-size: 18px;
  }
`

export const DescriptionContainer = styled.div``

export const Description = styled.p`
  flex: 1;
  color: #fff;
  font-size: 18px;
`

export const Tags = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`

export const Tag = styled.span`
  padding: 5px;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
`