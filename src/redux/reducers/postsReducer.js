import {SET_ALL_POSTS, ADD_NEW_POST, DELETE_POST} from '../types/postsTypes'


const postsReducer = (state = [], action) => {

	switch (action.type) {
		case SET_ALL_POSTS:
			return action.payload
		
		case ADD_NEW_POST: 
			return [
				...state,
				action.payload
			]
		case DELETE_POST:
			return state.filter((post) => post._id !== action.payload)
	
		default:
			return state
	}
}

export default postsReducer