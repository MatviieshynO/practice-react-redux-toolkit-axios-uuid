import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { firstName, lastName } from '../features/users/userSlice'

const User = () => {
  const dispatch = useDispatch()
  const fName = useSelector((state) => state.user.firstName)
  const lName = useSelector((state) => state.user.lastName)
  return (
    <div>
      <input
        type="text"
        placeholder="firstName"
        onChange={(e) => dispatch(firstName(e.target.value))}
      />
      <input
        type="text"
        placeholder="lastName"
        onChange={(e) => dispatch(lastName(e.target.value))}
      />
      <p>firstname:{fName} </p>
      <p>lastname: {lName}</p>
    </div>
  )
}

export default User
