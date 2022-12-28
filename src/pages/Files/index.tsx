import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import * as S from './styles'

interface FileProps {
  file: string
  file_status: string
  file_url: string
}

export function Files() {
  const [files, setFiles] = useState<FileProps[]>([])

  useEffect(() => {
    async function loadFiles() {
      const response = await api.get('/csv')
      const { files } = response.data as { files: FileProps[] }
      setFiles(files)
    }

    loadFiles()
  }, [])

  return (
    <S.Container>
      <S.Title>Contact List</S.Title>
      {files.length > 0 ? (
        <S.Table>
          <thead>
            <tr>
              <S.Th width={100}>File</S.Th>
              <S.Th width={100}>File Status</S.Th>
              <S.Th width={180}>File Url</S.Th>
            </tr>
          </thead>
        <tbody>
        {files.map((item, i) => (
          <tr>
              <td>{item.file}</td>
              <td>{item.file_status}</td>
              <td>
                <S.FileLink href={item.file_url} target='_blank'> {item.file_url}</S.FileLink>
              </td>
          </tr>
        ))}
        </tbody>
      </S.Table>
      ) : (
        <span>No files</span>
      )}
  
    </S.Container>
  )
}