import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import Form from '../components/Form/Form'
import EmployeesContext from '../context/employees';

function Home() {
    const { employees } = useContext(EmployeesContext);
    console.log('home', employees)
  return (
    <>
      	<div className="title">
    		<h1>HRnet</h1>
      	</div>
		<div className="container">
			<NavLink to="employee">View Current Employees</NavLink>
            <h2>Create Employee</h2>
			<Form></Form>
		</div>
    </>
  )
}

export default Home