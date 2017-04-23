import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import { API_END_POINT } from '../config'

const requestProfileStart = () => ({
	type: 'LOAD_PROFILE_REQUEST'
})

const requestProfileSuccess = (res) => {
	return {
		type: 'LOAD_PROFILE_SUCCESS',
		payload: res.data
	}
}

const requestProfileFailure = (err) => ({
	type: 'LOAD_PROFILE_FAILURE',
	payload: err
})



export function fetchProfile(user,password) {
	return (dispatch) => { 
	dispatch(requestProfileStart())
	//axios.get('https://jsonplaceholder.typicode.com/posts')
	//axios.get(`http://localhost:7777/chkLogin/${user}/${password}`)
	axios.get(`${API_END_POINT}/chkLogin/${user}/${password}`)
		.then((res) => {
		if(res.data.length === 0)
			console.log("ไม่ถูก")
		else{
			dispatch(requestProfileSuccess(res))
			//dispatch(Actions.Profile)
			console.log(res)
			dispatch(Actions.pop)
			
		}
		})
		.catch((err) => {
			dispatch(requestProfileFailure(err))
		})

	}
}