import React from 'react'
import Form from '../components/Form/Form'

function Home() {
  return (
    <>
      	<div class="title">
    		<h1>HRnet</h1>
      	</div>
		<div class="container">
			<a href="employee-list.html">View Current Employees</a>
            <h2>Create Employee</h2>
			<Form></Form>
		</div>
		<div id="confirmation" class="modal">Employee Created!</div>
    </>
  )
}

export default Home