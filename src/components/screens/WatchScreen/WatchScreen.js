import React,{useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getRelatedVideos } from '../../../redux/actions/videos.action'
import Comments from '../../Comments/Comments'
import VideoHorizontal from '../../VideoHorizontal/VideoHorizontal'
import VideoMetaData from '../../VideoMetaData/VideoMetaData'
import './WatchScreen.css'
const WatchScreen = () => {

	const {id} = useParams()

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getRelatedVideos(id))
	},[dispatch,id])

	const {videos,loading} = useSelector(state => state.relatedVideo)
	return (
		<Row>
			<Col lg={8}>
				<div className="watchScreen_player">
					<iframe src={`https://www.youtube.com/embed/${id}`}
						frameBorder="0"
						title="YT video"
						allowFullScreen
						width="100%"
						height="100%"
					></iframe>

				</div>
				<VideoMetaData />
				<Comments />
			</Col>
			<Col lg={4}>
				{!loading &&
						videos?.filter(video => video.snippet)
							.map(video => (
								<VideoHorizontal video={video} key={video.id.videoId} />
					)) }
			</Col>
		</Row>
	)
}

export default WatchScreen
