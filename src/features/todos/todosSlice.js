import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload)
    },
    removeTodo: (state, action) => {
      const todos = state.todos.filter((todo) => todo.id !== action.payload)
      state.todos = todos
    },
    toggleTodo: (state, action) => {
      const toggle = state.todos.find((todo) => todo.id === action.payload)
      toggle.complited = !toggle.complited
    },
  },
})

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions
export default todosSlice.reducer
