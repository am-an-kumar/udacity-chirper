import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const authedUser = 'dan_abramov'

export const handleInitialData = () => dispatch => {
  // dispatches action to show the Loading component
  dispatch(showLoading())
  getInitialData().then(({ users, tweets }) => {
    dispatch(receiveUsers(users))
    dispatch(receiveTweets(tweets))
    dispatch(setAuthedUser(authedUser))
    // dispatches action to hide the Loading component
    dispatch(hideLoading())
  })
}
