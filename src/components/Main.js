import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import App from './App'

const Main = ({ isUserAuthenticated }) => (
  <Router>{isUserAuthenticated !== null ? <Login /> : <App />}</Router>
)

const mapStateToProps = ({ authedUser }) => {
  return {
    isUserAuthenticated: authedUser !== null ? true : false,
  }
}

export default connect(mapStateToProps)(Main)
