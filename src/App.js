import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Main from './pages/Main';
import Chat from './pages/Chat';
import './scss/main.scss';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/chat/:chatId" component={Chat} />
          {/* <Chat /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
  