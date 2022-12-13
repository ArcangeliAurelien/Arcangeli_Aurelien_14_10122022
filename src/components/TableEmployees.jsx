import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, FirstName: "Aurélien", LastName: "Arcangeli", StartDate: "13/12/2022", Department: "Engineering", DateOfBirth: "29/05/1988", Street: "78 rue Pablo Neruda", City: "Cuincy", State: "France", ZipCode: "59553" },
]

const columns = [
  { field: 'FirstName', headerName: 'FirstName', width: 140 },
  { field: 'LastName', headerName: 'LastName', width: 140 },
  { field: 'StartDate', headerName: 'Start Date', width: 140 },
  { field: 'Department', headerName: 'Department', width: 140 },
  { field: 'DateOfBirth', headerName: 'Date of Birth', width: 140 },
  { field: 'Street', headerName: 'Street', width: 140 },
  { field: 'City', headerName: 'City', width: 140 },
  { field: 'State', headerName: 'State', width: 140 },
  { field: 'ZipCode', headerName: 'Zip Code', width: 140 },
]

export default function TableEmployees() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} rowsPerPageOptions={[]} />
    </div>
  )
}
