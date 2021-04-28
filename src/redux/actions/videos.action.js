import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS } from "../actionType"
import request from '../../api'
export const getPopularVideos = () => async dispatch => {
	try {
		dispatch({
			type:HOME_VIDEOS_REQUEST,

		})
		const {data} = await request('/videos',{
			params:{
				part:'snippet,contentDetails,statistics',
				chart:'mostPopular',
				regionCode:'IN',
				maxResults:20,
				pageToken:'',
			},
		})

		dispatch({type:HOME_VIDEOS_SUCCESS,
		payload:{
			videos:data.items,
			nextPageToken:data.nextPageToken,
		},
	})	
	
	}catch(error){
		console.log(error.message)
		dispatch({
			type:HOME_VIDEOS_FAIL,
			payload:error.message
		})

	}
}

export const getRelatedVideos = (id) => async dispatch => {
	try {
		dispatch({
			type:RELATED_VIDEO_REQUEST,

		})
		const {data} = await request('/search',{
			params:{
				part:'snippet',
				relatedToVideoId:id,
				maxResults:15,
				type:'video',
			},
		})

		dispatch({type:RELATED_VIDEO_SUCCESS,
		payload:data.items,
	})	
	
	}catch(error){
		console.log(error.message)
		dispatch({
			type:RELATED_VIDEO_FAIL,
			payload:error.message
		})

	}
}