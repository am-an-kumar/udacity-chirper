import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { tweetIds } = this.props
    return (
      <div>
        <h3>Your timeline</h3>
        <ul>
          {tweetIds.map(tweetId => (
            <li key={tweetId}>{`Tweet Id: ${tweetId}`}</li>
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
