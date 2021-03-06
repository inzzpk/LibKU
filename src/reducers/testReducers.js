// const initialState = {
// 	value: {}
// }

// export default (state = initialState, action) => {
// 	switch(action.type) {
// 		case 'LOAD_TEST_SUCCESS':
// 			return {
// 				...state,
// 				value: action.payload
// 			}
// 		default:
// 			return state
// 	}
// }

export const testReducers = (state = {
	isFetching : false,
	val : {}
}, action) =>{
	switch(action.type) {
		case 'LOAD_TEST_REQUEST':
		return {
				...state,
				isfetching : false
			}
		case 'LOAD_TEST_SUCCESS':
			return {
				...state,
				val: action.payload,
				isfetching : false
			}
		default:
			return state
	}
}