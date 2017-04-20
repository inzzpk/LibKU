import axios from 'axios'
import {Actions} from 'react-native-router-flux'

const requestStart = () => ({
	type: 'LOAD_TEST_REQUEST'
})

const requestSuccess = (res) => {
	return {
		type: 'LOAD_TEST_SUCCESS',
		payload: res.data
	}
}

const requestFailure = (err) => ({
	type: 'LOAD_TEST_FAILURE',
	payload: err
})



export function testAction(user,password) {
	return (dispatch) => { 
	dispatch(requestStart())
	//axios.get('https://jsonplaceholder.typicode.com/posts')
	//axios.get(`http://localhost:7777/chkLogin/${user}/${password}`)
	axios.get(`http://158.108.140.123:7777/chkLogin/${user}/${password}`)
		.then((res) => {
		if(res.data.length === 0)
			console.log("ไม่ถูก")
		else{
			dispatch(requestSuccess(res))
			dispatch(Actions.Profile)
			console.log(res)
		}
		})
		.catch((err) => {
			dispatch(requestFailure(err))
		})

	}
}