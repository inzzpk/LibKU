import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import { API_END_POINT } from '../config'

const requestByBarcodeStart = () => ({
	type: 'LOAD_BYBARCODE_REQUEST'
})

const requestByBarcodeSuccess = (res) => {
	return {
		type: 'LOAD_BYBARCODE_SUCCESS',
		payload: res.data
	}
}

const requestByBarcodeFailure = (err) => ({
	type: 'LOAD_BYBARCODE_FAILURE',
	payload: err
})



export function fetchByBarcode(barcode) {
	return (dispatch) => { 
	dispatch(requestByBarcodeStart())
	axios.get(`${API_END_POINT}/byBarcode/${barcode}`)
		.then((res) => {
		if(res.data.length === 0)
			console.log("ไม่ถูก")
		else{
			dispatch(requestByBarcodeSuccess(res))
			//dispatch(Actions.pop)
			dispatch(Actions.Request)
		//	console.log(res)
		}
		})
		.catch((err) => {
			dispatch(requestByBarcodeFailure(err))
		})

	}
}