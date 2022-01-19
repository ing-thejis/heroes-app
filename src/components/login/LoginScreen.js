import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { types } from '../../types/types'
import { AuthContext} from '../../auth/authContext'

const LoginScreen = () => {

	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext)

	const handleLogin = () => {
		
		const action = {
			type: types.login,
			payload: {
				name: 'jesith',
			}
		}

		dispatch(action)

		const lastPath = localStorage.getItem('lastPath') || '/';

		navigate(lastPath, {
			replace: true
		})
	}

	return (
		<div className="container mt-5">
			<h1>Login </h1>
			<hr />

			<button onClick={handleLogin} className="btn btn-primary">Login</button>
		</div>
	)
}

export default LoginScreen