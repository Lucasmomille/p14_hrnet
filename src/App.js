import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));


function App() {
	return (
		<Router >
			<Suspense fallback={<p>Loading...</p>}>
			<Routes>
				<Route path="/" element={<Home/>} />
			</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
