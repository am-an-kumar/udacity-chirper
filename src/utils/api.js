import { _getUsers, _getTweets, _saveTweet, _saveLikeToggle } from './_DATA'

export const getInitialData = () =>
  Promise.all([_getUsers(), _getTweets()]).then(([users, tweets]) => ({
    users,
    tweets,
  }))

export const saveLikeToggle = info => _saveLikeToggle(info)

export const saveTweet = info => _saveTweet(info)
