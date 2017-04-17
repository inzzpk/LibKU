import axios from 'axios'

const requestStart = () => ({
	type: 'LOAD_TEST_REQUEST'
})

const requestSuccess = (res) => ({
	type: 'LOAD_TEST_SUCCESS',
	payload: res.data
})

const requestFailure = (err) => ({
	type: 'LOAD_TEST_FAILURE',
	payload: err
})



export function testAction(user,password) {
	console.log(user)
	return (dispatch) => { 
	dispatch(requestStart())
	//axios.get('https://jsonplaceholder.typicode.com/posts')
	axios.get(`http://localhost:7777/chkLogin/${user}/${password}`)
		.then((res) => {
			dispatch(requestSuccess(res))
			console.log(res)
		})
		.catch((err) => {
			dispatch(requestFailure(err))
		})

	}
}