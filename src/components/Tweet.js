import React from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers.js'

const Tweet = ({ tweetId, tweet }) => {
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
  return {
    authedUser,
    tweet: formatTweet(
      tweet,
      users[tweet.author],
      authedUser,
      tweets[tweet.replyingTo],
    ),
  }
}

export default connect(mapStateToProps)(Tweet)
