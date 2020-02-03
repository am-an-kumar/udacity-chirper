const logger = store => next => action => {
  console.group(action.type)
  console.group('action')
  console.dir(action)
  console.groupEnd()
  next(action)
  console.group('new state')
  console.dir(store.getState())
  console.groupEnd()
  console.groupEnd()
}

export default logger
