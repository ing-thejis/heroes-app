import React from 'react'

const LoginScreen = () => {

	const handleLogin = () => {
		console.log('login')
	}

	return (
		<div className="container mt-5">
			<h1>Login screen</h1>
			<hr />

			<button onClick={handleLogin} className="btn btn-primary">Login</button>
		</div>
	)
}

export default LoginScreen