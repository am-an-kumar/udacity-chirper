import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <>
          <LoadingBar />
          <div className='container'>
            {!this.props.loading && (
              <>
                <Nav />
                <div>
                  <Route exact path='/' component={Dashboard} />
                  <Route path='/new' component={NewTweet} />
                  <Route path='/tweet/:id' component={TweetPage} />
                </div>
              </>
            )}
          </div>
        </>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null ? true : false,
})

// hot(module)(App) - enables hot reloading for component tree rooted at App
export default hot(module)(connect(mapStateToProps)(App))
