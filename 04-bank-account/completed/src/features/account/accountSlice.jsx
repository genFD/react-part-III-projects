import { createSlice } from '@reduxjs/toolkit'

// INITIALSTATE
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
}
// REDUCERS
const reducers = {
  //Reducer for "account/deposit" action
  deposit: (state, action) => {
    state.balance += action.payload
  },

  //Reducer for "account/withdraw" action
  withdraw: (state, action) => {
    state.balance -= action.payload
  },

  //Reducer for "account/requestLoan" action
  requestLoan: {
    prepare: (amount, purpose) => {
      return {
        payload: { amount, purpose },
      }
    },
    reducer: (state, action) => {
      if (state.loan > 0) return
      state.loan = action.payload.amount
      state.loanPurpose = action.payload.purpose
      state.balance += action.payload.amount
    },
  },

  //Reducer for "account/payLoan" action
  payLoan: (state, action) => {
    state.balance -= state.loan
    state.loanPurpose = ''
    state.loan = 0
  },
}
export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount }
  return async function (dispatch, getState) {
    // API call
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    )
    const data = await response.json()
    const convertedInUSD = data.rates.USD

    // return action
    dispatch({ type: 'account/deposit', payload: convertedInUSD })
  }
}

const options = {
  name: 'account', //Name of slice
  initialState,
  reducers,
}

const accountSlice = createSlice(options)

export const { withdraw, requestLoan, payLoan } = accountSlice.actions

export default accountSlice.reducer

// ACCOUNT SLICE BEFORE ADDING CREATE SLICE

// INITIAL STATE
// const initalState = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: '',
// }
// ACTION CREATORS
// export function deposit(amount, currency) {
//   if (currency === 'USD') return { type: 'account/deposit', payload: amount }
//   return async function (dispatch, getState) {
//     // API call
//     const response = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     )
//     const data = await response.json()
//     const convertedInUSD = data.rates.USD

//     // return action
//     dispatch({ type: 'account/deposit', payload: convertedInUSD })
//   }
// }
// export function withdraw(amount) {
//   return { type: 'account/withdraw', payload: amount }
// }
// export function requestLoan(amount, purpose) {
//   return { type: 'account/requestLoan', payload: { amount, purpose } }
// }
// export function payLoan() {
//   return { type: 'account/payLoan' }
// }

// REDUCER
// export default function accountReducer(state = initalStateAccount, action) {
//   switch (action.type) {
//     case 'account/deposit':
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//       }
//     case 'account/withdraw':
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       }
//     case 'account/requestLoan':
//       if (state.loan > 0) return
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       }
//     case 'account/payLoan':
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: '',
//         balance: state.balance - state.loan,
//       }

//     default:
//       return state
//   }
// }
