export const fetchProfile = (state = {
	isFetching : false,
	val : {}
}, action) =>{
	switch(action.type) {
		case 'LOAD_PROFILE_REQUEST':
		return {
				...state,
				isfetching : false
			}
		case 'LOAD_PROFILE_SUCCESS':
			return {
				...state,
				val: action.payload,
				isfetching : false
			}
		default:
			return state
	}
}