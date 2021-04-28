import { createStore, applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {authReducer} from './reducers/auth.reducer'
import { homeVideosReducer,relatedVideoReducer } from './reducers/videos.reducer'
const rootReducer = combineReducers({
	auth:authReducer,
	homeVideos:homeVideosReducer,
	relatedVideo:relatedVideoReducer,
})

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store