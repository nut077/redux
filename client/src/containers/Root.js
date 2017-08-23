import React from 'react'

function getMessage() {
  return 'Hello World eiei 55'
}

export default () => (
  <div>
    <h1>{getMessage()}</h1>
    <div>Hello React Hot Loader</div>
  </div>
);