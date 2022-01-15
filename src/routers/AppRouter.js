import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LoginScreen from '../components/login/LoginScreen'
import DashboardRouter from './DashboardRouter'

const AppRouter = () => {
	return (
		<Router>
			<Routes>

				<Route path="/login" element={ <LoginScreen /> } />
				
				<Route path="/*" element={ <DashboardRouter /> } />

			</Routes>
		</Router>
	)
}

export default AppRouter