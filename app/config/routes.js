import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { BracketContainer } from 'containers'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={BracketContainer} />
  </Router>
)

export default routes
