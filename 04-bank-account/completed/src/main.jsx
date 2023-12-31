import React from 'react'
import { createRoot } from 'react-dom/client'
import store from './Store.jsx'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
