import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import EmployeesContext from '../context/employees';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'startDate', headerName: 'Start Date', width: 130 },
  { field: 'department', headerName: 'Department', width: 130 },
  {
    field: 'dateOfBirth',
    headerName: 'Date of Birth',
    width: 130,
  },
  {
    field: 'street',
    headerName: 'Street',
    width: 130,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 130,
  },
  {
    field: 'state',
    headerName: 'State',
    width: 130,
  },
  {
    field: 'zipCode',
    headerName: 'Zip Code',
    width: 80,
  },
];

function DataTable(rows) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows.rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

function CurrentEmployee() {
    const { employees } = useContext(EmployeesContext);

    const rows = [...employees]
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <DataTable rows={rows}></DataTable>
            <NavLink to='/'>Home</NavLink>
        </div>
    )
}

export default CurrentEmployee