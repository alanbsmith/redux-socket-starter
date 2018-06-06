import React, { Fragment } from 'react';

import Socket from 'containers/Socket';

import './App.scss';

function App({ children }) {
  return (
    <Socket>
      {({ connected }) => (
        <Fragment>
          <h1>Redux Socket Starter</h1>
          <span>socket is {connected ? 'connected' : 'disconnected'}</span>
          {children}
        </Fragment>
      )}
    </Socket>
  )
}

export default App;
