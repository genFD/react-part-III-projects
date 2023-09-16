import { configureStore } from '@reduxjs/toolkit'
import customerReducer from './features/customer/customerSlice'
import accountReducer from './features/account/accountSlice'

const options = {
  reducer: {
    customer: customerReducer,
    account: accountReducer,
  },
}

const store = configureStore(options)

export default store
