import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props
    return loading ? <p>Loading</p> : <Dashboard />
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null ? true : false,
})

// hot(module)(App) - enables hot reloading for component tree rooted at App
export default hot(module)(connect(mapStateToProps)(App))
