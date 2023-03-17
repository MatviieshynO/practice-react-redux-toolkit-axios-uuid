import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/users/userSlice'
import todosSlice from '../features/todos/todosSlice'
import postSlice from '../features/posts/postSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    todos: todosSlice,
    posts: postSlice,
  },
})
