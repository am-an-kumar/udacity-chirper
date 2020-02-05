import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import '@babel/polyfill'
import './css/style.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// react-axe will run only in dev mode
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  // running the accessibility tests 1 second after the app is loaded
  axe(React, ReactDOM, 1000)
}

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <Main />
    <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
  </Provider>,
  document.getElementById('root'),
)
