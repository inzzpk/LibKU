import axios from 'axios'
import { API_END_POINT } from '../config'

export function createDeli(item) {
	//let route = `http://localhost:7777/createDeli`
	let route = `${API_END_POINT}/createDeli`
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