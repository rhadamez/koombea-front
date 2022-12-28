import { ChangeEvent, useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import api from '../../services/api'
import { useAuth } from '../../store/AuthContext'
import * as S from './styles'

interface FieldsProps {
  original: string
  new: string
}

export function UploadContacts() {
  const { user } = useAuth()
  const [fields, setFields] = useState<FieldsProps[]>([])
  const [correctFields, setCorrectFields] = useState([
    'name',
    'email',
    'date_of_birth',
    'phone',
    'address',
    'credit card',
  ])

  const [loadingCsv, setLoadingCsv] = useState(false)
  const [csvSelected, setCsvSelected] = useState<any>()

  async function handleCsvChange(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.files) {
      setLoadingCsv(true)
      const data = new FormData()
      const csv = e.target.files[0]
      setCsvSelected(csv)
      data.append('file', csv)

      const response = await api.post('contacts/import', data)
      const { fields } = response.data as { fields: string[] }
      const newFields = fields.map(item => {
        return { original: item, new: '' }
      })

      setFields(newFields)
      console.log(response.data)
      setLoadingCsv(false)
    }
  }

  function onChangeField(name: string, text: string) {
    const currentFields = [...fields]
    const fieldIndex = currentFields.findIndex(item => item.original === name)
    if(fieldIndex !== -1) {
      const field = currentFields[fieldIndex]
      field.new = text
      currentFields[fieldIndex] = field
      setFields(currentFields)
    }
  }

  return (
    <S.Container>
      <S.Title>Upload CSV of Contacts</S.Title>
      <S.Panel>
        {!csvSelected ? (
          <>
            <S.InputContainer>
            <S.CsvInput type='file' id='file' onChange={handleCsvChange} disabled={loadingCsv}/>
            <S.TextInput>{loadingCsv ? 'Loading...' : 'Click and select the CSV'}</S.TextInput>
            </S.InputContainer>
            <Button text='Send'/>
          </>
        ) : (
          <>
            <S.DescriptionContainer>
            <S.Description>Put the follow names at the correct field to save correctly in database:</S.Description>
            </S.DescriptionContainer>
            <S.FieldsHeader>
                <span>CSV Columns</span>
                <S.Tags>
                  {correctFields.map(item => (
                    <S.Tag>{item}</S.Tag>
                  ))}
                </S.Tags>
            </S.FieldsHeader>
            {fields.length > 0 && fields.map(item => (
              <S.FieldContainer key={item.original}>
                <span>{item.original}</span>
                <Input
                  name={item.original}
                  onChange={(e) => onChangeField(e.currentTarget.name, e.currentTarget.value)} />
              </S.FieldContainer>
            ))}
          </>
        )}
        <span>{JSON.stringify(fields)}</span>
      </S.Panel>
    </S.Container>
  )
}