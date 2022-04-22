import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import { searchReducer } from "./searchReducer";
import { personReducer } from "./personReducer";
import { postReducer } from "./postReducer";




const rootReducer = combineReducers({
	posts: postsReducer,
	search: searchReducer,
	person: personReducer,
	post: postReducer,

    })


export default rootReducer