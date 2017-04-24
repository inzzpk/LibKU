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
			console.log("load success :",action.payload)
			return {
				...state,
				val: action.payload,
				isfetching : false
			}
		default:
			return state
	}
}