import React from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers.js'

const Tweet = ({ tweetId, tweet }) => {
  if (tweet === null) {
    return <p>There is no tweet as such</p>
  }

  const { parent } = tweet
  return (
    <li>
      <p>{tweetId}</p>
      {parent === null ? null : <span>{parent.author}</span>}
    </li>
  )
}

const mapStateToProps = ({ tweets, users, authedUser }, { tweetId }) => {
  const tweet = tweets[tweetId]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  }
}

export default connect(mapStateToProps)(Tweet)
