import React from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import {UserList} from 'Components'

const Users = ({users}) => (
  <Switch>
    <Route path='/users' render={() => <UserList users={users}/> }/>
  </Switch>
);

export default compose(
  withRouter,
  connect(
    ({users}, props) => ({
      users
    })
  )
)(Users)