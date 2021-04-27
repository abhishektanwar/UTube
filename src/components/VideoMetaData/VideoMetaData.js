import React from 'react'
import './VideoMetaData.css'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp,MdThumbDown } from 'react-icons/md'

const VideoMetaData = () => {
	return (
		<div className="videoMetaData py2">
			<div className="videoMetaData__top ">
				<h5>Video title</h5>
				<div className="d-flex justify-content-between align-items-center py-1">
					<span>
						{numeral('100000').format("0.a")} Views •
						{moment('2020-09-09').fromNow()}
					</span>
				
				</div>
				<div>
					<span>
						<MdThumbUp size={22} />{numeral('100000').format("0.a")} 
						
					</span>
					<span>
						<MdThumbDown size={22} />{numeral('100000').format("0.a")} 
						
					</span>
					
				</div>
			</div>
			<div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-2">
				<div className="d-flex">
					<img 
						src=""
						className = "rounded-circle mr-3"
					/>
					<div className="d-flex flex-colums">
						<span>asasgasc</span>
						<span>{numeral('100000').format("0.a")} Subscribers </span>
					</div>
					<button className="btn border-0 p-2 m-2">Subscribe</button>
				</div>
			</div>
			<div className="videoMetaData__description"></div>
		</div>
	)
}

export default VideoMetaData
