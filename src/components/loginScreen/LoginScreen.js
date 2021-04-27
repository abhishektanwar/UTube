import React,{ useEffect } from 'react'
import { login } from '../../redux/actions/auth.action'
import './loginScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
const LoginSCreen = () => {
	const dispatch = useDispatch()
	const accessToken = useSelector(state => state.auth.accessToken)
	const handleLogin = () => {
		dispatch(login())
	}

	const history = useHistory()

	useEffect(()=>{
		if(accessToken){
			history.push('/')
		}
	},[accessToken,history])


	return (
		<div className="login">
			<div className="login__container">
				<img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/YouTube_light_logo_%282017%29.svg" alt="" />
				<button onClick={handleLogin}>Login with Google</button>

			</div>
		</div>
	)
}

export default LoginSCreen
