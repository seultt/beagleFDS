import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import ReduxPromise from 'redux-promise';

import reducers from './reducers'
import Main from './pages/Main';
import Chat from './pages/Chat';
import './scss/main.scss';
import Header from './components/header/header';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/chat/:chatId" component={Chat} />
          {/* <Chat /> */}
        </div>
      </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
  