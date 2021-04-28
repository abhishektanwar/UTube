import React,{useState,useEffect} from 'react'
import './VideoHorizontal.css'
import {AiFillEye} from 'react-icons/ai'
import request from '../../api'
import moment from 'moment'
import numeral from 'numeral'
import { Col, Row } from 'react-bootstrap'
const VideoHorizontal = ({video}) => {
	console.log('vio',video)
	const {
		id,
		snippet: {
		   channelId,
		   channelTitle,
		   title,
		   publishedAt,
		   thumbnails: { medium },
		},
		contentDetails,
	 } = video
	const [views,setViews] = useState(null)
	const [duration,setDuration] = useState(null)
	const [channelIcon,setChannelIcon] = useState(null)
	const seconds = moment.duration(duration).asSeconds()
	const _duration = moment.utc(seconds * 1000).format("mm:ss")
	useEffect(()=>{
		const get_video_details = async() => {
			const {data:{items}} = await request('/videos',{
				params:{
					part:'contentDetails,statistics',
					id:id.videoId
				}
			})
			setDuration(items[0].contentDetails.duration)
			setViews(items[0].statistics.viewCount)
		}
		get_video_details()
	},[id])

	useEffect(()=>{
		const get_channel_icon= async() => {
			const {data:{items}} = await request('/channels',{
				params:{
					part:'snippet',
					id:channelId
				}
			})
			
			setChannelIcon(items[0].snippet.thumbnails.default)
		}
		get_channel_icon()
	},[channelId])

	return (
		<Row className="videoHorizonral m-1 py-2 align-items-center">
			<Col xs={6} md={4} className="videoHorizontal__left">
				<img src={medium.url} alt="video_thumbnail" className="videoHorizontal__thumbnail_wrapper"/>
				<span className="video__top__duration">{duration}</span>
			</Col>
			<Col xs={6} md={8} className="videoHorizontal__right">
				<p className="videoHorizontal__title mb-1">
					{title}
				</p>
				<div className="videoHorizontal__details">
						<AiFillEye />{numeral(setViews).format("0.a")} Views -
						{moment(publishedAt).fromNow()}
				</div>
				<div className="videoHorizontal__channel d-flex align-items-center mt-1">
					<p>{channelTitle}</p>
				</div>

			</Col>
		</Row>
	)
}

export default VideoHorizontal
