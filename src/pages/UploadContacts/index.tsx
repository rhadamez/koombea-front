import { ChangeEvent, useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import api from '../../services/api'
import * as S from './styles'

interface FieldsProps {
  original: string
  new: string
}

export function UploadContacts() {
  const [fields, setFields] = useState<FieldsProps[]>([])
  const [correctFields,] = useState([
    'name',
    'email',
    'date_of_birth',
    'phone',
    'address',
    'credit_card',
  ])

  const [filename, setFilename] = useState('')
  const [loadingCsv, setLoadingCsv] = useState(false)
  const [csvSelected, setCsvSelected] = useState<any>()
  const [successMessage, setSuccessMessage] = useState('')

  async function handleCsvChange(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.files) {
      setLoadingCsv(true)
      const data = new FormData()
      const csv = e.target.files[0]
      setCsvSelected(csv)
      data.append('file', csv)

      const response = await api.post('contacts/import', data)
      const { fields, filename } = response.data as { fields: string[], filename: string }
      setFilename(filename)
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

  function handleRemoveCsv() {
    setFields([])
    setCsvSelected(null)
  }

  async function handleSendNewContacts() {
    await api.post('/contacts', {
      filename,
      headers: fields
    })
    setSuccessMessage('Contacts imported to database!')
    handleRemoveCsv()
  }

  return (
    <S.Container>
      <S.Title>Upload CSV of Contacts</S.Title>
      {successMessage && (
        <span>{successMessage}</span>
      )}
      <S.Panel>
        {!csvSelected ? (
            <S.InputContainer>
              <S.CsvInput type='file' id='file' onChange={handleCsvChange} disabled={loadingCsv}/>
              <S.TextInput>{loadingCsv ? 'Loading...' : 'Click and select the CSV'}</S.TextInput>
            </S.InputContainer>
        ) : (
          <>
            <S.RemoveCsvContainer>
              <S.Csv>
                <S.CsvName>{csvSelected && csvSelected.name}</S.CsvName>
              </S.Csv>
              <Button text='Remove Csv' onClick={handleRemoveCsv}/> 
            </S.RemoveCsvContainer>
            <S.DescriptionContainer>
              <S.Description>Put the correct names at the correct field to save in database:</S.Description>
            </S.DescriptionContainer>
            <S.FieldsHeader>
                <span>Correct column names</span>
                <S.Tags>
                  {correctFields.map(item => (
                    <S.Tag key={item}>{item}</S.Tag>
                  ))}
                </S.Tags>
            </S.FieldsHeader>
            <S.FormHeader>
                <span>CSV columns</span>
                <span>Correct name</span>
            </S.FormHeader>
            {fields.length > 0 && fields.map(item => (
              <S.FieldContainer key={item.original}>
                <span>{item.original}</span>
                <Input
                  name={item.original}
                  onChange={(e) => onChangeField(e.currentTarget.name, e.currentTarget.value)} />
              </S.FieldContainer>
            ))}
            <Button text='Save CSV in database' onClick={handleSendNewContacts}/>
          </>
        )}
      </S.Panel>
    </S.Container>
  )
}