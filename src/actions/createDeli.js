import axios from 'axios'

export function createDeli(item) {
	//let route = `http://localhost:7777/createDeli`
	let route = `http://158.108.140.123:7777/createDeli`
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