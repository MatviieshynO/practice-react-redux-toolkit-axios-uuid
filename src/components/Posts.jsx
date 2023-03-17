import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../features/posts/postSlice'
import PostItem from './PostItem'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <button
        style={{ marginBottom: '20px' }}
        onClick={() => dispatch(getPosts())}
      >
        getPosts
      </button>
      {posts?.map((post) => (
        <PostItem key={post.title} post={post} />
      ))}
    </div>
  )
}

export default Posts
