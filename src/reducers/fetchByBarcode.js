export const fetchByBarcode = (state = {
	isFetching : false,
	valu : {title:'',
        author:'',
        isbn:'',
        pbulish2:''}
	// valu : {}
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
				valu: action.payload[0],
				isfetching : false
			}
		default:
			return state
	}
}