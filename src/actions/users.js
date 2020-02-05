import { getUsers } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'

const receiveUsers = users => {
  console.log(users)
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export const handleReceiveUsers = () => dispatch => {
  dispatch(showLoading())
  getUsers()
    .then(users => dispatch(receiveUsers(users)))
    .then(() => dispatch(hideLoading()))
}
