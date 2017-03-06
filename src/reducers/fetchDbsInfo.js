export const fetchDbsInfo = (state = {
	isFetching : false,
	value : {}
}, action) =>{
	switch(action.type) {
		case 'LOAD_DBSINFO_REQUEST':
			return {
				...state,
				isfetching : false
			}
		case 'LOAD_DBSINFO_SUCCESS':
			return {
				...state,
				value: action.payload,
				isfetching : false
			}
		default:
			return state
	}
}