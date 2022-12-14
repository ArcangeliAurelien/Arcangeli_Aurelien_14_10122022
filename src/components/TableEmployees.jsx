import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

// const rows = [
//   {
//     id: 1,
//     FirstName: "Aurélien",
//     LastName: "Arcangeli",
//     StartDate: "13/12/2022",
//     Department: "Engineering",
//     DateOfBirth: "29/05/1988",
//     Street: "78 rue Pablo Neruda",
//     City: "Cuincy",
//     State: "France",
//     ZipCode: "59553"
//   },
// ]

export default function TableEmployees() {
  const employees = useSelector(state => state.employees.employees)
  const addRow = [...new Set(employees.map((employee, index) => {
    return {
      ...employee,
      id: index,
      DateOfBirth: employee.DateOfBirth.toLocaleDateString(),
      StartDate: employee.StartDate.toLocaleDateString(),
      State: employee.State.value,
      Department: employee.Department.label
    }
  }))]
  console.log(addRow);

  const columns = [
    { field: 'FirstName', headerName: 'FirstName', width: 140, editable: false },
    { field: 'LastName', headerName: 'LastName', width: 140, editable: false },
    { field: 'StartDate', headerName: 'Start Date', width: 140, editable: false },
    { field: 'Department', headerName: 'Department', width: 140, editable: false },
    { field: 'DateOfBirth', headerName: 'Date of Birth', width: 140, editable: false },
    { field: 'Street', headerName: 'Street', width: 140, editable: false },
    { field: 'City', headerName: 'City', width: 140, editable: false },
    { field: 'State', headerName: 'State', width: 140, editable: false },
    { field: 'ZipCode', headerName: 'Zip Code', width: 140, editable: false },
  ]

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={addRow}
        columns={columns}
        rowsPerPageOptions={[10, 25, 50, 100]}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
          }
        }}
      />
    </div>
  )
}
