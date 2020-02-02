import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'

const authedUser = 'dan_abramov'

export const handleInitialData = () => dispatch =>
  getInitialData().then(({ users, tweets }) => {
    dispatch(receiveUsers(users))
    dispatch(receiveTweets(tweets))
    dispatch(setAuthedUser(authedUser))
  })
