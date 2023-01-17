import React, { useEffect } from 'react';
import { increment, fetchPostsAsync, posts, likes } from "../../store/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
	const dispatch = useDispatch()
	const getPosts = useSelector(posts)
	const totalLikes = useSelector(likes)

	useEffect(() => {
		dispatch(fetchPostsAsync())
	}, [])

	return (
		<div className='posts'>
			<div className="info">
				<div className='likes'>Total likes: <span className='total__likes'>{totalLikes}</span> &#128153;</div>
			</div>
			
			{getPosts.map(({ title, body, id }) => (
				<div className='post' key={id}>
					<div className='post__title'>{title}</div>
					<div className='post__body'>{body}</div>
					<button onClick={() => dispatch(increment())}>&#128420;</button>
				</div>
			))}
		</div>
	);
};

export default Posts;