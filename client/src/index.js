import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import RootContailer from 'Containers/Root'

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  )
};

render(RootContailer);

if (module.hot) {
  module.hot.accept('Containers/Root', () => render(RootContailer))
}