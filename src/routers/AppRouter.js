import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from '../components/ui/NavBar'
import MarvelScreen from '../components/marvel/MarvelScreen'		
import DcScreen from '../components/dc/DcScreen'
import LoginScreen from '../components/login/LoginScreen'
import SearchScreen from '../components/search/SearchScreen'

const AppRouter = () => {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={ <MarvelScreen /> } />
				<Route path="/marvel" element={ <MarvelScreen /> } />
				<Route path="/dc" element={ <DcScreen /> } />
				<Route path="/search" element={ <SearchScreen /> } />
				<Route path="/login" element={ <LoginScreen /> } />
			</Routes>
		</Router>
	)
}

export default AppRouter