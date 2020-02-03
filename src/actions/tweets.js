import { saveLikeToggle } from '../utils/api'
import { toast } from 'react-toastify'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

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
