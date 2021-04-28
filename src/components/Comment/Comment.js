import React from 'react'
import moment from 'moment'
import './Comment.css'
const Comment = () => {
	return (
		<div className="comment p-2 d-flex">
			<img src="" className="rounded-circle mr-2" />
			<div className="comment__body">
				<p className="comment__header">
					Test User - {moment("2020-08-09").fromNow()}
				</p>
				<p> comment data here</p>
			</div>
		</div>
	)
}

export default Comment
