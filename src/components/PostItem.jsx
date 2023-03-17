import { useDispatch } from 'react-redux'
import { deletePosts } from '../features/posts/postSlice'

function PostItem({ post }) {
  const dispatch = useDispatch()
  return (
    <div className="post-item">
      <div>{post.title}</div>
      <button onClick={() => dispatch(deletePosts(post.id))}>delete</button>
    </div>
  )
}

export default PostItem
