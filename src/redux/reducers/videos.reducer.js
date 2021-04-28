import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS } from "../actionType"

export const homeVideosReducer = (state={
	videos:[],
	loading:false,
	nextPageToken:null,
},action) => {
	const {type,payload} = action

	switch(type){
		case HOME_VIDEOS_SUCCESS:return{
			...state,
			videos:payload.videos,
			loading:false,
			nextPageToken:payload.nextPageToken
		}
		case HOME_VIDEOS_FAIL:return{
			...state,
			loading:false,
			error:payload
		}
		case HOME_VIDEOS_REQUEST:return{
			...state,
			loading:true,
		}
		default:return state
	}
}

export const relatedVideoReducer = (
	state = {
		loading: true,
		videos: [],
	},
	action
	) => {
	const { payload, type } = action
	switch (type) {
		case RELATED_VIDEO_REQUEST:
			return {
				...state,
				loading: true,
			}
		case RELATED_VIDEO_SUCCESS:
			return {
				...state,
				videos: payload,
				loading: false,
			}
		case RELATED_VIDEO_FAIL:
			return {
				...state,
				loading: false,
				error: payload,
			}

		default:
			return state
	}
}
