import { useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { useReducer } from 'react'
const endpoint = 'http://localhost:8000/questions'

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  errorMessage: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
        errorMessage: action.payload,
      }
    default:
      throw new Error('Unknown action')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed', payload: err }))
  }, [])
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
      </Main>
    </div>
  )
}

export default App
