// formats timestamp for use in Tweet component
export const formatDate = timestamp => {
  const date = new Date(timestamp)
  const time = date.toLocaleTimeString('en-US')
  return (
    time.substring(0, 5) + time.slice(-2) + ' | ' + date.toLocaleDateString()
  )
}

// formats tweet for use in Tweet component
export const formatTweet = (tweet, author, authedUser, parentTweet) => {
  const { id, likes, replies, text, timestamp } = tweet
  const { name, avatarURL } = author

  return {
    name,
    id,
    timestamp,
    text,
    avatar: avatarURL,
    likes: likes.length,
    replies: replies.length,
    hasLiked: likes.includes(authedUser),
    authorId: author.id,
    parent: parentTweet
      ? {
          author: parentTweet.author,
          id: parentTweet.id,
        }
      : null,
  }
}
