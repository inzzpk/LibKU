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
	axios.get('http://localhost:8888/Back-LibKU/public/api/dbsinfos')
		.then((res) => {
			dispatch(requestFetchDbsInfoSuccess(res))
			console.log(res)
		})
		.catch((err) => {
			dispatch(requestFetchDbsInfoFailure(err))
		})
	}
}