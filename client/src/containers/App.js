import React from 'react'
import {Provider} from 'react-redux'
import rootReducer from 'Reducers'
import {createStore} from 'redux'
import {Header} from 'Components'
import {Articles, Users} from 'Containers'

const store = createStore(rootReducer);
export default () => (
  <Provider store={store}>
    <div>
      <Header/>
      <Articles/>
      <Users/>
    </div>
  </Provider>
)