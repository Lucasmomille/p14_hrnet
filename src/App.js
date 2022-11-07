import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const CurrentEmployee = lazy(() => import('./pages/CurrentEmployee'))


function App() {
	return (
		<Router >
			<Suspense fallback={<p>Loading...</p>}>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/employee" element={<CurrentEmployee/>} />
			</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
