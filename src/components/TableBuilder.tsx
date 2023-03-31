import { FC } from 'react'
import { Column, useTable } from 'react-table'

interface ITableBuilder {
  columns: Column<any>[]
  data: any[]
}

const TableBuilder: FC<ITableBuilder> = ({ columns, data }: ITableBuilder) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => (
                <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableBuilder
