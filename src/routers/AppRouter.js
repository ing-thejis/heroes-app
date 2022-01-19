import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LoginScreen from '../components/login/LoginScreen'
import DashboardRouter from './DashboardRouter'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
	return (
		<Router>
			<Routes>

				{/*<Route path="/login" element={ <LoginScreen /> } />*/}
				<Route path="/login" element={
					<PublicRoute>
						<LoginScreen />
					</PublicRoute>
				} />

				<Route path="/*" element={
					<PrivateRoute>
						<DashboardRouter />
					</PrivateRoute>
				} />
				

			</Routes>
		</Router>
	)
}

export default AppRouter