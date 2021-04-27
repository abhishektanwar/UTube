import React,{useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videos.action'
import CategoriesBar from '../categoriesBar/CategoriesBar'
import Video from '../video/Video'

const HomeScreen = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPopularVideos())
	},[dispatch])

	const {videos} = useSelector(state => state.homeVideos)
	return (
		<Container>
			<CategoriesBar />
			<Row>
				
				{
					videos.map((video) => (
						<Col lg={3} md={4}>
							<Video video={video} key={video.id}/>
						</Col>
				))
				}
			</Row>
		</Container>
	)
}

export default HomeScreen
