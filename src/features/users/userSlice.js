import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: '',
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    firstName: (store, actions) => {
      store.firstName = actions.payload
      
    },
    lastName: (store, actions) => {
      store.lastName = actions.payload
    },
  },
})

export const { firstName, lastName } = userSlice.actions
export default userSlice.reducer
