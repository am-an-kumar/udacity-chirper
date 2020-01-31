import React from 'react'
import { hot } from 'react-hot-loader'

const App = () => <h1>Hello World!!!</h1>

// hot(module)(App) - enables hot reloading for component tree rooted at App
export default hot(module)(App)
