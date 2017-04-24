import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import { API_END_POINT } from '../config'

const requestProfileByBarcodeStart = () => ({
	type: 'LOAD_PROFILE_REQUEST'
})

const requestProfileByBarcodeSuccess = (res) => {
	console.log("request profile success")
	return {
		type: 'LOAD_PROFILE_SUCCESS',
		payload: res.data
	}
}

const requestProfileByBarcodeFailure = (err) => ({
	type: 'LOAD_PROFILE_FAILURE',
	payload: err
})



export function fetchProfileByBarcode(barcode_number) {
	// console.log('fetch profile')
	return (dispatch) => { 
	dispatch(requestProfileByBarcodeStart())
	console.log(barcode_number)
	//axios.get('https://jsonplaceholder.typicode.com/posts')
	//axios.get(`http://localhost:7777/chkLogin/${user}/${password}`)
	axios.get(`${API_END_POINT}/LoginbyBarcode/${barcode_number}`)
		.then((res) => {
		if(res.data.length === 0)
			console.log("ไม่ถูก")
		else{
			dispatch(requestProfileByBarcodeSuccess(res))
			//dispatch(Actions.Profile)
			Actions.pop()
			Actions.pop()
			// Actions.Request()
		}
		
		})
		.catch((err) => {
			dispatch(requestProfileByBarcodeFailure(err))
		})

	}
}
