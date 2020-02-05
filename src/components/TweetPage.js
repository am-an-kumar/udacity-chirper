import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

const TweetPage = ({ tweetId, replies }) => (
  <div>
    <Tweet tweetId={tweetId} />
    <NewTweet replyingTo={tweetId} />
    <TweetList tweetIds={replies} />
  </div>
)

const mapStateToProps = ({ tweets }, props) => {
  const tweetId = props.match.params.id
  return {
    tweetId,
    replies: tweets[tweetId].replies,
  }
}

export default connect(mapStateToProps)(TweetPage)
