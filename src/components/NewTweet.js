import React, { Component } from 'react'

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

    console.log(this.state.text)

    // TODO: create a new tweet

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

export default NewTweet
