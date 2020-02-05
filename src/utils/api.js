import { _getUsers, _getTweets, _saveTweet, _saveLikeToggle } from './_DATA'

// export const getInitialData = () =>
//   Promise.all([_getUsers(), _getTweets()]).then(([users, tweets]) => ({
//     users,
//     tweets,
//   }))

export const getUsers = () => _getUsers()

export const getTweets = () => _getTweets()

export const saveLikeToggle = info => _saveLikeToggle(info)

export const saveTweet = info => _saveTweet(info)
