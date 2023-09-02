# useReducer

Let's continue our exploration of the `useReducer()` hook with a more complex application :

In the `App` component, let's dispatch our first action `dataReceived` :

```jsx
...
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => console.error(err))
  }, [])
}
...
```

We can also handle the `dataReceived` action in our reducer:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      }
  }
}
...
```

- we set questions to data received
- we set status to 'ready'

Let's dispatch another action `dataFailed` :

```jsx
...
 .catch((err) => dispatch({ type: 'dataFailed', payload: err }))
 ...
```

and handle it in out reducer :

```jsx
case 'dataFailed':
     return {
       ...state,
       status: 'error',
     }
```

- We use the effect hook to fetch our data on initial render
- To store that data in state, we've used the reducer hook
- As soon as our data is succesfully fetched, we dispatch an action called `dataReceived` and as a payload we pass in the actual data
- When the reducer receives the action, the payload is set to the data received from the server and we also set the status state to `ready`
