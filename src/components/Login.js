import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleReceiveUsers } from '../actions/users'

class Login extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveUsers())
  }

  render() {
    return <p>Some random content</p>
  }
}

const mapStateToProps = ({ users }) => ({
  users,
})

export default connect(mapStateToProps)(Login)
