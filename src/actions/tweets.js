export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

import { saveLikeToggle } from '../utils/api'

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
    console.error('Sorry!!! You are not allowed to like your own tweet')
    return toggleTweet({ ...info })
  }

  return dispatch => {
    // updating UI before getting server response
    dispatch(toggleTweet({ ...info }))

    saveLikeToggle(info)
      .then(() => console.log('Toggled successfully'))
      .catch(() => {
        console.error('Error while toggling')
        // reverting the UI change if server returns an error
        dispatch(toggleTweet({ ...info }))
      })
  }
}
