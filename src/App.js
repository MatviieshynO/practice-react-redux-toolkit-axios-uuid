import Todo from './components/Todo'
import TodoItem from './components/TodoItem'
import User from './components/User'
import Posts from './components/Posts'
import { useSelector } from 'react-redux'

function App() {
  const todo = useSelector((state) => state.todos.todos)

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        style={{
          marginRight: '30px',
          border: '1px solid black',
          padding: '10px',
          height: '150px',
          width: '300px',
        }}
      >
        <User />
      </div>
      <div
        style={{ border: '1px solid black', padding: '10px', height: '300px' }}
      >
        <Todo />
        {todo?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <div
        style={{
          marginLeft: '20px',
          border: '1px solid black',
          padding: '10px',
          width: '250px',
          display: 'flex',
        }}
      >
        <Posts />
      </div>
    </div>
  )
}

export default App
