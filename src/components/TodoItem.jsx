import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../features/todos/todosSlice'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const deleteTodoHandler = (id) => {
    dispatch(removeTodo(id))
  }
  const toggleTodoHandler = (id) => {
    dispatch(toggleTodo(id))
  }
  return (
    <div>
      <div
        style={{ textAlign: 'center', marginTop: '30px' }}
        className={`${todo.complited ? 'completed' : ''}`}
      >
        {todo.text}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
        <button onClick={() => toggleTodoHandler(todo.id)}>Complete</button>
      </div>
    </div>
  )
}

export default TodoItem
