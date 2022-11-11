import React from 'react'
import { NavLink } from 'react-router-dom'
import Form from '../components/Form/Form'

function Home() {
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
		<div id="confirmation" className="modal">Employee Created!</div>
    </>
  )
}

export default Home