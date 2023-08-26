import { useReducer } from 'react'

const initialState = {
  step: 1,
  count: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step }
    case 'decrement':
      return { ...state, count: state.count - state.step }
    case 'setCount':
      return { ...state, count: action.payload }
    case 'step':
      return { ...state, step: action.payload }
    case 'reset':
      return initialState
    default:
      throw new Error('Invalid action')
  }
}

function App() {
  return (
    <>
      <DateCounter />
    </>
  )
}

export function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { count, step } = state
  // This mutates the date object.
  const date = new Date('june 21 2027')
  date.setDate(date.getDate() + count)

  const inc = function () {
    dispatch({ type: 'increment' })
  }
  const dec = function () {
    dispatch({ type: 'decrement' })
  }

  const defineCount = function (e) {
    dispatch({ type: 'setCount', payload: Number(e.target.value) })
  }

  const defineStep = function (e) {
    dispatch({ type: 'step', payload: Number(e.target.value) })
  }

  const reset = function () {
    dispatch({ type: 'reset' })
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App
