import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import VideoHorizontal from '../../VideoHorizontal/VideoHorizontal'
import VideoMetaData from '../../VideoMetaData/VideoMetaData'
import './WatchScreen.css'
const WatchScreen = () => {

	const {id} = useParams()

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
			</Col>
			<Col lg={4}>
				{
					[...Array(10)].map(()=><VideoHorizontal />)
				}
			</Col>
		</Row>
	)
}

export default WatchScreen
