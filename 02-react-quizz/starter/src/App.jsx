import { useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'

import { useReducer } from 'react'
const endpoint = 'http://localhost:8000/questions'

function reducer(state, action) {
  switch (action.type) {
  }
}
const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
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
