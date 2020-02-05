import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets'

const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      }

    case ADD_TWEET: {
      const { tweet } = action
      const replyingTo = tweet.replyingTo

      // if tweet is a reply to a pre-existing tweet
      if (replyingTo !== null) {
        // adding current tweet id to the list of replies for the parent tweet
        return {
          ...state,
          [tweet.id]: tweet,
          [replyingTo]: {
            ...state[replyingTo],
            replies: state[replyingTo].replies.concat([tweet.id]),
          },
        }
      }

      // no need to look for parent tweet if the new tweet is not a reply to some pre-existing tweet
      return {
        ...state,
        [tweet.id]: tweet,
      }
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
