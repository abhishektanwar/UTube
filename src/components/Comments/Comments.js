import React from 'react'
import Comment from '../Comment/Comment'
import './Comments.css'
const Comments = () => {
	return (
		<div className="comments">
			<p>Number of comments here</p>
			<div className="comment_form display-flex w-100 my-2">
				<img src="" alt="user_img" className="rounded-circle mr-3" />
				<form className="rounded-circle flex-grow-1">
					<input type="text"className="flex-grow-1" placeholder="write a comment" />
					<button className="border-0 p-2">Comment</button>
				</form>
			</div>
			<div className="comments__list">
				{
					[...Array(10)].map(()=>(<Comment />))
				}
			</div>
		</div>
	)
}

export default Comments
