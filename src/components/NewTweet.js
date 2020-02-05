import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'

class NewTweet extends Component {
  state = {
    text: '',
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
    })
  }

  render() {
    const maxLength = 280
    const warningLength = 100
    const { text } = this.state
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
