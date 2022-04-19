import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import { searchReducer } from "./searchReducer";
import { personReducer } from "./personReducer";




const rootReducer = combineReducers({
	posts: postsReducer,
	search: searchReducer,
	person: personReducer,
    })


export default rootReducer