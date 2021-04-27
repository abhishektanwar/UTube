import auth from '../../firebase'
import firebase from 'firebase/app'
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS,LOAD_PROFILE } from '../actionType'
export const login = () => async dispatch => {
	try{
		dispatch({
			type:LOGIN_REQUEST,

		})
		const provider = new firebase.auth.GoogleAuthProvider()
		const res = await auth.signInWithPopup(provider)
		provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
		console.log(res)

		const accessToken = res.credential.accessToken
		const profile = {
			name:res.additionalUserInfo.profile.name,
			photoURL:res.additionalUserInfo.profile.picture
		}

		dispatch({
			type:LOGIN_SUCCESS,
			payload:accessToken
		})
		dispatch({
			type:LOAD_PROFILE,
			payload:profile,
		})
	}
	catch(error){
		console.log(error.message)
		dispatch({
			type:LOGIN_FAIL,
			payload:error.message
		})

	}
}