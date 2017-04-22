export const fetchByBarcode = (state = {
	isFetching : false,
	valu : {}
}, action) =>{
	switch(action.type) {
		case 'LOAD_BYBARCODE_REQUEST':
		return {
				...state,
				isfetching : false
			}
		case 'LOAD_BYBARCODE_SUCCESS':
			return {
				...state,
				valu: action.payload,
				isfetching : false
			}
		default:
			return state
	}
}