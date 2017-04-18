import axios from 'axios'
import {Actions} from 'react-native-router-flux'

const createRequestStart = () => ({
	type: 'LOAD_TEST_REQUEST'
})

const createRequestSuccess = (res) => {
	return {
		type: 'LOAD_TEST_SUCCESS',
		payload: res.data
	}
}

const createRequestFailure = (err) => ({
	type: 'LOAD_TEST_FAILURE',
	payload: err
})



export function createRequest(item) {
	let route = `http://158.108.143.240:7777/createRequest`
	return (dispatch) => { 
		// console.log(item)
		axios.post(route,item)
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
		// dispatch(createRequestStart())
	}
}


// export function createRequest(item) {
// 	let route = `http://158.108.143.240:7777/createRequest`
// 	return (dispatch) => { 
// 	dispatch(createRequestStart())
// 	//axios.get('https://jsonplaceholder.typicode.com/posts')
// 	//axios.get(`http://localhost:7777/chkLogin/${user}/${password}`)
// 	axios.get(`http://158.108.143.240:7777/createRequest/${item.r_title}/${item.r_type}/${item.r_author}/${item.r_isbn}/
// 													${item.r_pub}/${item.r_name}/${item.r_mail}${item.r_tel}/
// 													${item.r_fac}/
// 													${item.r_year}/${item.r_date}`)
// 		.then((res) => dispatch(createRequestSuccess(res))
// 		)
// 		.catch((err) => {
// 			dispatch(createRequestFailure(err))
// 		})

// 	}
// }