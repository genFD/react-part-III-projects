import { createSlice } from '@reduxjs/toolkit'

// INITIAL STATE
const initialState = {
  id: '',
  fullName: '',
  createdAt: '',
}

// REDUCERS

const reducers = {
  createCustomer: {
    prepare: (fullName, id) => {
      return {
        payload: {
          fullName,
          id,
          createdAt: new Date().toISOString(),
        },
      }
    },
    reducer: (state, action) => {
      state.id = action.payload.id
      state.fullName = action.payload.fullName
      state.createdAt = action.payload.createdAt
    },
  },
  updateName: (state, action) => {
    state.fullName = action.payload
  },
}

const options = {
  name: 'customer',
  initialState,
  reducers,
}

const customerSlice = createSlice(options)

export const { createCustomer, updateName } = customerSlice.actions
export default customerSlice.reducer
// const initalState = {
//   id: '',
//   fullName: '',
//   createdAt: '',
// }

// // ACTION CREATORS
// export function createCustomer(fullName, id) {
//   return {
//     type: 'customer/createCustomer',
//     payload: { fullName, id, createdAt: new Date().toISOString() },
//   }
// }
// export function updateName(fullName) {
//   return {
//     type: 'customer/updateName',
//     payload: fullName,
//   }
// }
// // REDUCER
// export default function customerReducer(state = initalStateCustomer, action) {
//   switch (action.type) {
//     case 'customer/createCustomer':
//       return { ...state, ...action.payload }
//     case 'customer/updateName':
//       return { ...state, fullName: action.payload }
//     default:
//       return state
//   }
// }
