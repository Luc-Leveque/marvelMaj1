import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from '../views/login'
import Characters from '../views/Characters'
import Character from '../views/Character'
import Search from '../views/Search'

import PrivateRoute from '../utils/privateRoute'
import Favorite from '../views/Favorite'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/characters' component={Characters} />
        <PrivateRoute exact path='/characters/:id' component={Character} />
        <PrivateRoute exact path='/search' component={Search} />
        <PrivateRoute exact path='/favorite' component={Favorite} />
      </Switch>
    </Router>
  )
}

export default Routes
