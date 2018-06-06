import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store';

import Root from './components/Root';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
