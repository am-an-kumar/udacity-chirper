import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets'

const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      }

    case TOGGLE_TWEET: {
      const { id, hasLiked, authedUser, authorId } = action
      const tweet = state[id]

      // TOGGLE_TWEET action is dispatched as a result of a user attempting to like his/her own tweet
      if (authorId === authedUser) {
        return state
      }

      return {
        ...state,
        [id]: {
          ...tweet,
          likes: hasLiked
            ? tweet.likes.filter(likedUserIds => likedUserIds !== authedUser)
            : tweet.likes.concat([authedUser]),
        },
      }
    }

    default:
      return state
  }
}

export default tweets
