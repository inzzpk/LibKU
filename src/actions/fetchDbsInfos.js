import axios from 'axios'

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
	//axios.get('http://localhost:8888/Back-LibKU/public/api/dbsinfos')
	//axios.get('http://localhost:8888/Laravel-LibKU/public/api/dbsinfos')
	axios.get('http://158.108.140.123:8888/Laravel-LibKU/public/api/dbsinfos')
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