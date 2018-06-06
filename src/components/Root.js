import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import Home from './pages/Home';

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
          <App>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="*" component={Home} />
            </Switch>
          </App>
      </Router>
    </Provider>
  );
};

export default Root;
