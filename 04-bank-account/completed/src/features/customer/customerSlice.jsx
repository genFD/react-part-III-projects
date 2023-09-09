// INITIAL STATE
const initalStateCustomer = {
  id: '',
  fullName: '',
  createdAt: '',
}
// ACTION CREATORS
export function createCustomer(fullName, id) {
  return {
    type: 'customer/createCustomer',
    payload: { fullName, id, createdAt: new Date().toISOString() },
  }
}
export function updateName(fullName) {
  return {
    type: 'customer/updateName',
    payload: fullName,
  }
}
// REDUCER
export default function customerReducer(state = initalStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return { ...state, ...action.payload }
    case 'customer/updateName':
      return { ...state, fullName: action.payload }
    default:
      return state
  }
}
