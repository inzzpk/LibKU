import axios from 'axios'
import { API_END_POINT } from '../config'

const requestFetchDbsInfo = () => ({
	type: 'LOAD_DBSINFO_REQUEST'
})

const requestFetchDbsInfoSuccess = (res) => ({
	type: 'LOAD_DBSINFO_SUCCESS',
	payload: res.data
})

const requestFetchDbsInfoFailure = (err) => ({
	type: 'LOAD_DBSINFO_FAILURE',
	payload: err
})



export function fetchDbsInfo() {
	return (dispatch) => { 
	dispatch(requestFetchDbsInfo())
	//axios.get('http://localhost:8888/Laravel-LibKU/public/api/dbsinfos')
	axios.get(`${API_END_POINT}:7777/fetchDbs`)
		.then((res) => {
			dispatch(requestFetchDbsInfoSuccess(res))
			console.log(res)
		})
		.catch((err) => {
			dispatch(requestFetchDbsInfoFailure(err))
		})
	}
}

// export function changeSubmissionState(index) {
// 	return {
// 		type: 'CHANGE_SUBMISSION_STATE',
// 		index: index
// 	}
// }