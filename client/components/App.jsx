import React from 'react'
import { Route } from 'react-router-dom'

import Main from './Main'
import OtherArticle from './OtherArticle'

class App extends React.Component {
  render () {
    return (
      <>
        <Route exact path='/' component={Main} />
        <Route exact path='/newArticle' component={OtherArticle} />
      </>
    )
  }
}

export default App
