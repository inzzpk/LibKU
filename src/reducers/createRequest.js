export const createRequest = (state = {
	isFetching : false,
	req : {}
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
				req: action.payload,
				isfetching : false
			}
		default:
			return state
	}
}