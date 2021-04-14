import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import dataObj from '../data/teams-data.json';

import { Table, Thead, Tbody, Tr, Th, Td, chakra, Tooltip } from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons"
import { useTable, useSortBy } from "react-table"

//CSS
import style from '../assets/css/components/DataTable.module.css';

// ICONS
import arrows from '../assets/img/icons/arrows.svg';

const DataTable = ( {className} ) => {

  const teams = dataObj.teams;

  const tableActions = () => {
    return <>
      <div className="flex-row">
        <Tooltip hasArrow label="Edit" aria-label="Tooltip for edit" placement="top">
          <Link to="/new-team">
            <EditIcon aria-label="edit icon" color="brandPink.600" margin="0 10px"/>
          </Link>
        </Tooltip>
        <Tooltip hasArrow label="Delete" aria-label="Tooltip for delete" placement="top">
          <Link to="/new-team">
            <DeleteIcon aria-label="delete icon" color="brandPink.600" margin="0 10px"/>
          </Link>
        </Tooltip>
      </div>
    </>
  }

  const data = useMemo( () =>
      teams.map((team) => {
        let obj = {
          name: team.name,
          description: team.description,
          actions: tableActions()
        }
        return obj;
      }),
    [teams],
  )

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        isCanSort: true
      },
      {
        Header: "Description",
        accessor: "description",
        isCanSort: true,
      },
      {
        Header: "",
        accessor: "actions",
        isCanSort: false,
      },
    ],
    [],
  )

const handleArrowChange = (column) => {
  if (column.isCanSort) {
    if(column.isSorted){
      if (column.isSortedDesc) {
        return <TriangleDownIcon aria-label="sorted descending"/>
      } else {
        return <TriangleUpIcon aria-label="sorted ascending" />
      }
    } else {
      return <img src={arrows} alt="Arrows Undefined" style={{display:"inline-block"}}/>
    }
  } else {
    return null
  }
}

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <Table id={style.dataTable} className={className} {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th className={style['table-cell']}
                {...column.getHeaderProps( column.isCanSort ? column.getSortByToggleProps() : column.canSort = false )}
                isNumeric={column.isNumeric}
              >
                {column.render("Header")}
                <chakra.span pl="4">
                  { handleArrowChange(column) }
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td className={style['table-cell']} {...cell.getCellProps()} isNumeric={cell.column.isNumeric} >
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default DataTable;