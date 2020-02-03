export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

import { saveLikeToggle } from '../utils/api'

export const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets,
})

const toggleTweet = ({ id, authedUser, hasLiked }) => ({
  type: TOGGLE_TWEET,
  id,
  authedUser,
  hasLiked,
})

export const handleToggleTweet = info => {
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
