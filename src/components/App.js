import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { handleReceiveTweets } from '../actions/tweets'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveTweets())
  }

  render() {
    return (
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
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null ? true : false,
})

// hot(module)(App) - enables hot reloading for component tree rooted at App
export default hot(module)(connect(mapStateToProps)(App))
