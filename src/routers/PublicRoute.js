import { useContext } from 'react'
import { AuthContext } from '../auth/authContext'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {

	const { user } = useContext(AuthContext)

	return !user.logged
		? children
		: <Navigate to="/marvel" />
}

export default PublicRoute