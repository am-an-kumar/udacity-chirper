import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'

class Dashboard extends Component {
  render() {
    const { tweetIds } = this.props
    return (
      <div>
        <h3 className='center'>Your timeline</h3>
        <ul>
          {tweetIds.map(tweetId => (
            <Tweet tweetId={tweetId} key={tweetId} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ tweets }) => {
  return {
    tweetIds: Object.keys(tweets).sort(
      (firstTweet, secondTweet) =>
        tweets[firstTweet].timestamp - tweets[secondTweet].timestamp,
    ),
  }
}

export default connect(mapStateToProps)(Dashboard)
