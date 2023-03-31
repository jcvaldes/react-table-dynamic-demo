import React from 'react'
import fakeData from './utils/mocks/data.mock'
import { Column } from 'react-table'
import TableBuilder from './components/TableBuilder'
import './App.css'

const App = () => {
  const data = React.useMemo(() => fakeData, [])

  interface IColumn {
    id: number
    first_name: string
    last_name: string
    email: string
    gender: string
    university: string
  }
  const columns: Column<IColumn>[] = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'First Name',
        accessor: 'first_name',
      },
      {
        Header: 'Last Name',
        accessor: 'last_name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'University',
        accessor: 'university',
      },
    ],
    [],
  )

  return (
    <div className="App">
      <h1>Table Dynamic Columns with react table demo </h1>
      <div className="container">
        <TableBuilder columns={columns} data={data} />
      </div>
    </div>
  )
}

export default App
