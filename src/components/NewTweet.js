import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'

class NewTweet extends Component {
  state = {
    text: '',
    redirectToHome: false,
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({
      text,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { text } = this.state
    const { dispatch, replyingTo } = this.props

    dispatch(handleAddTweet(text, replyingTo))

    // resetting form state
    this.setState({
      text: '',
      redirectToHome: replyingTo !== null ? true : false,
    })
  }

  render() {
    const { text, redirectToHome } = this.state

    if (redirectToHome) {
      return <Redirect to='/' />
    }

    const maxLength = 280
    const warningLength = 100
    const charactersLeft = maxLength - text.length

    return (
      <div>
        <h3 className='center'>Compose new tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={maxLength}
          >
            {charactersLeft <= warningLength && (
              <div className='tweet-length'>{charactersLeft}</div>
            )}
          </textarea>
          <button className='btn' type='submit' disabled={text === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet)
