import React, { lazy, Suspense, useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeesContext from './context/employees';

const Home = lazy(() => import('./pages/Home'));
const CurrentEmployee = lazy(() => import('./pages/CurrentEmployee'))


function App() {
	const [employees, setEmployees] = useState([]);
	
	return (
		<EmployeesContext.Provider value={{employees, setEmployees}}>
			<Router >
				<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/employee" element={<CurrentEmployee/>} />
				</Routes>
				</Suspense>
			</Router>
		</EmployeesContext.Provider>
	);
}

export default App;
