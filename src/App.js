import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
          <Route component={Login} />
        </Switch>
      </Router>
  )
}

export default App
