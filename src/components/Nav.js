import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Nav = ({ name, avatar }) => (
  <nav className='nav'>
    <ul>
      <li>
        <NavLink to='/' exact activeClassName='active'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/new' activeClassName='active'>
          New Tweet
        </NavLink>
      </li>
      <li>
        <span>{`Hi ${name}!`}</span>
        <img src={avatar} alt={`Avatar of ${name}`} className='avatar' />
      </li>
    </ul>
  </nav>
)

const mapStateToProps = ({ authedUser, users }) => {
  const userData = users[authedUser]
  return {
    name: userData.name.split(' ')[0],
    avatar: userData.avatarURL,
  }
}

export default connect(mapStateToProps)(Nav)
