import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  posts: [],
}

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch(addPosts(res.data))
  }
)

export const deletePosts = createAsyncThunk(
  'posts/deletePost',
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    dispatch(deletePost(id))
  }
)

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    },
  },
  extraReducers: {
    [getPosts.pending]: () => console.log('getPosts : pending'),
    [getPosts.fulfilled]: () => console.log('getPosts : fulfilled'),
    [getPosts.rejected]: () => console.log('getPosts : rejected'),
    [deletePosts.pending]: () => console.log('deletePosts : pending'),
    [deletePosts.fulfilled]: () => console.log('deletePosts : fulfilled'),
    [deletePosts.rejected]: () => console.log('deletePosts : rejected'),
  },
})

export const { addPosts, deletePost } = postSlice.actions
export default postSlice.reducer
