import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return <h1>Hello World!!!</h1>
  }
}

// hot(module)(App) - enables hot reloading for component tree rooted at App
// export default hot(module)(App)
export default connect()(App)
