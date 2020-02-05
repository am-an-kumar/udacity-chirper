import React from 'react'
import Tweet from './Tweet'

const TweetList = ({ tweetIds }) => (
  <div>
    <h3 className='center'>Replies</h3>
    <ul>
      {tweetIds.map(tweetId => (
        <Tweet tweetId={tweetId} key={tweetId} />
      ))}
    </ul>
  </div>
)

export default TweetList
