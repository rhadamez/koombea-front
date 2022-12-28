import { useEffect, useState } from 'react'
import api from '../../services/api'
import { useAuth } from '../../store/AuthContext'
import * as S from './styles'

interface ContactsProps {
  name: string
  email: string
  phone: string
  address: string
  date_of_birth: string
  card_last_digits: string
  franchise: string
}

export function Contacts() {
  const { user } = useAuth()
  const [contacts, setContacts] = useState<ContactsProps[]>([])

  useEffect(() => {
    async function loadContacts() {
      const response = await api.get('/contacts')
      const { contacts } = response.data as { contacts: ContactsProps[] }
      setContacts(contacts)
    }

    loadContacts()
  }, [])

  return (
    <S.Container>
      <S.Title>Contact List</S.Title>
      {contacts.length > 0 ? (
        <S.Table>
          <thead>
            <tr>
              <S.Th width={100}>Name</S.Th>
              <S.Th width={100}>Date of Birth</S.Th>
              <S.Th width={180}>Phone</S.Th>
              <S.Th width={100}>Address</S.Th>
              <S.Th width={100}>Credit Card</S.Th>
              <S.Th width={150}>Franchise</S.Th>
              <S.Th width={100}>Email</S.Th>
            </tr>
          </thead>
          <tbody>
          {contacts.map((item, i) => (
            <tr>
                <td>{item.name}</td>
                <td>{item.date_of_birth}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.card_last_digits}</td>
                <td>{item.franchise}</td>
                <td>{item.email}</td>
            </tr>
          ))}
          </tbody>
        </S.Table>
      ) : (
        <span>No Contacts</span>
      )}

    </S.Container>
  )
}