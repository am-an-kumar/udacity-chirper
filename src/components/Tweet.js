import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers.js'
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from 'react-icons/ti/index'
import { handleToggleTweet } from '../actions/tweets'

class Tweet extends Component {
  redirectToParent = () => {
    // TODO: redirect to parent tweet on clicking @reply to @parent_id text
  }

  handleLike = () => {
    const { authedUser, tweet } = this.props
    this.props.dispatch(
      handleToggleTweet({
        authedUser,
        id: tweet.id,
        hasLiked: tweet.hasLiked,
      }),
    )
  }

  render() {
    const { tweet, tweetId } = this.props
    if (tweet === null) {
      return <p>There is no tweet as such</p>
    }

    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      id,
      parent,
    } = tweet

    return (
      <div className='tweet'>
        <img src={avatar} alt={`Avatar of ${name}`} className='avatar' />
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className='replying-to'
                onClick={e => this.redirectToParent(e, parent.id)}
              >
                {`Replying to ${parent.author}`}
              </button>
            )}
            <p>{text}</p>
          </div>

          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
            {replies !== 0 && <span>{replies}</span>}
            <button className='heart-button' onClick={this.handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
              ) : (
                <TiHeartOutline className='tweet-icon' />
              )}
              {likes !== 0 && <span>{likes}</span>}
            </button>
          </div>
        </div>
      </div>
    )
  }
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
