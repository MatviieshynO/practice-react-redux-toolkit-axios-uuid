import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todosSlice'
import { v4 } from 'uuid'
import { useState } from 'react'

const Todo = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: inputValue,
      complited: false,
    }

    dispatch(addTodo(todo))
    setInputValue('')
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input
          value={inputValue}
          type="text"
          placeholder="Enter text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => addTodoHandler()}>Add</button>
      </div>
    </div>
  )
}

export default Todo
