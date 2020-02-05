import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { toast } from 'react-toastify'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

export const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets,
})

const toggleTweet = ({ id, authorId, authedUser, hasLiked }) => ({
  type: TOGGLE_TWEET,
  id,
  authorId,
  authedUser,
  hasLiked,
})

export const handleToggleTweet = info => {
  // dispatching action locally without performing any async operation if a user attempts to like his/her own tweet
  if (info.authedUser === info.authorId) {
    toast.error("Can't like your own tweet")
    return toggleTweet({ ...info })
  }

  return dispatch => {
    // updating UI before getting server response
    dispatch(toggleTweet({ ...info }))

    saveLikeToggle(info)
      .then(() =>
        toast.success(info.hasLiked ? 'Tweet like removed' : 'Tweet liked'),
      )
      .catch(() => {
        toast.error(
          info.hasLiked ? 'Error removing tweet like' : 'Error liking tweet',
        )
        // reverting the UI change if server returns an error
        dispatch(toggleTweet({ ...info }))
      })
  }
}

const addTweet = tweet => ({
  type: ADD_TWEET,
  tweet,
})

export const handleAddTweet = (text, replyingTo) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    // showing the loading indicator prior to starting async process of saving a tweet
    dispatch(showLoading())

    // invoking saveTweet and once that succeeds, we dispatch ADD_TWEET action to update redux and once that is done, we hide the loading indicator
    saveTweet({
      text,
      author: authedUser,
      replyingTo,
    })
      .then(tweet => dispatch(addTweet(tweet)))
      .then(() => {
        dispatch(hideLoading())
      })
  }
}
