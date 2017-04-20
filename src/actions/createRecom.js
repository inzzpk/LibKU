import axios from 'axios'
import { API_END_POINT } from '../config'

export function createRecom(item) {
	//let route = `http://localhost:7777/createRecom`
	let route = `${API_END_POINT}:7777/createRecom`
	return (dispatch) => { 
		// console.log(item)
		axios.post(route,item)
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}